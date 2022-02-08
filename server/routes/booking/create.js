const router = require("express").Router();
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const { database } = require("../../prisma");

// create booking

const routeData = {
  path: "/booking/create",
  method: "POST",
};

const callback = async (req, res) => {
  try {
    //1. destructure the req.body(name, email, password)
    const { userId, carNumber, parkingNumber, address, date } = req.body;

    //2. check if booking exists (if booking exist then throw error)
    const booking = await database.booking.findFirst({
      where: { carNumber: carNumber },
    });
    if (booking) {
      return res.status(401).send("Booking already exists");
    }

    //3. enter the new user insisde our database
    const newBooking = await database.booking.create({
      data: {
        userId,
        carNumber,
        parkingNumber,
        address,
        date,
      },
    });
    //5. generating our jwt tokens
    const token = jwtGenerator(newBooking.id);
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  callback,
  routeData,
};
