const express = require("express");
const router = express.Router();

const bcrypt = require("bcrypt");
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const { database } = require("../../prisma");

// signin route

const routeData = {
  path: "/user/signin",
  method: "POST",
};

const callback = async (req, res) => {
  try {
    //1. destructure the req.body
    const { email, password, token } = req.body;

    //2. check if users doesn't exist (if not then we throw error)
    const user = await database.user.findFirst({ where: { email: email } });
    if (!user) {
      return res.status(401).json("User doesn't exist'");
    }

    //3. check if incoming password is the same the database password
    if (!password && !token)
      return res.status(401).json("No passowrd or token provided");
    if (password) {
      const validPassword = await bcrypt.compare(password, user.password);

      if (!validPassword) {
        return res.status(401).json("Passowrd or Email is incorrect");
      }
    }

    if (token && user.token !== token) {
      return res.status(401).json("Passowrd or Email is incorrect");
    }

    //5. give them jwt token
    const newToken = jwtGenerator(user.id);
    const newUser = await database.user.update({
      where: { id: user.id },
      data: { token: newToken },
    });
    res.json(newUser);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  callback,
  routeData,
};
