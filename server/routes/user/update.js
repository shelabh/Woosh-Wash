const { UserRole } = require("@prisma/client");

const router = require("express").Router();
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const { database } = require("../../prisma");

// Update booking

const routeData = {
  path: "/user/update",
  method: "PUT",
};

const callback = async (req, res) => {
  try {
    //1. destructure the req.body(user, carNumber, parkingNumber, address, date)
    const { id, name, email, password, phoneNumber, role, adminId, token } =
      req.body;

    //2. check if booking exists (if booking doesnt exist then throw error)
    const user = await database.user.findFirst({
      where: { id },
    });

    if (!user) {
      return res.status(401).send("User doesn't exist");
    }
    const data = {};
    if (name) data.name = name;
    if (email) data.email = email;
    if (password) data.password = password;
    if (phoneNumber) data.phoneNumber = phoneNumber;

    if (role && adminId) {
      const admin = await database.user.findFirst({
        where: { id: adminId },
      });
      if (admin && admin.role === UserRole.ADMIN) {
        data.role = role;
      }
    }

    //3. update a booking insisde our database
    const updateUser = await database.user.update({
      where: {
        id,
      },
      data,
    });

    res.json(updateUser);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  callback,
  routeData,
};
