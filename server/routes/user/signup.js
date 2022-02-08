const express = require("express");

const bcrypt = require("bcrypt");
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const { database } = require("../../prisma");
const { UserRole } = require("@prisma/client");

// signup route

const routeData = {
  path: "/user/signup",
  method: "POST",
};

const callback = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { name, email, password, phoneNumber } = req.body;

    //2. check if user exists (is user exxist then throw error)
    const user = await database.user.findFirst({ where: { email: email } });
    if (user) {
      return res.status(401).send("User already exists");
    }

    //3. Bcrypt the user password
    const saltRound = 10;
    const salt = await bcrypt.genSalt(saltRound);
    const bcryptPassword = await bcrypt.hash(password, salt);

    const data = {
      name,
      email,
      password: bcryptPassword,
      phoneNumber,
    };
    if (email === process.env.ADMIN_EMAIL) {
      data.role = UserRole.ADMIN;
    }
    //6. enter the new user insisde our database
    const newUser = await database.user.create({
      data,
    });
    const token = jwtGenerator(newUser.id);
    const newerUser = await database.user.update({
      where: { id: newUser.id },
      data: { token },
    });
    res.json(newerUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  callback,
  routeData,
};
