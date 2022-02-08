const { UserRole, StatusUpdate } = require("@prisma/client");

const router = require("express").Router();
const jwtGenerator = require("../../utils/jwtGenerator");
const validInfo = require("../../middleware/validInfo");
const { database } = require("../../prisma");

// Update booking

const routeData = {
  path: "/booking/update",
  method: "PUT",
};

const callback = async (req, res) => {
  try {
    //1. destructure the req.body(user, carNumber, parkingNumber, address, date)
    const { id, userId, carNumber, parkingNumber, address, date, status } =
      req.body;

    //2. check if booking exists (if booking doesnt exist then throw error)
    const booking = await database.booking.findFirst({
      where: { id },
    });
    const user = await database.user.findFirst({
      where: { id: userId },
    });

    if (!booking) {
      return res.status(401).send("Booking doesn't exist");
    }
    if (!user) {
      return res.status(401).send("User doesn't exist");
    }
    if (
      booking.userId !== user.id ||
      user.role !== UserRole.MANAGER ||
      user.role !== UserRole.ADMIN
    ) {
      return res.status(401).send("You are not authorized");
    }
    const data = {};
    if (carNumber) data.carNumber = carNumber;
    if (parkingNumber) data.parkingNumber = parkingNumber;
    if (address) data.address = address;
    if (date) data.date = date;
    if (
      status &&
      (user.role === UserRole.MANAGER || user.role === UserRole.ADMIN)
    ) {
      data.status = status;
    }
    //3. update a booking insisde our database
    const updateBooking = await database.booking.update({
      where: {
        id,
      },
      data,
    });

    res.json(updateBooking);
  } catch (err) {
    console.error(err);
    res.status(500).send("Server Error");
  }
};

module.exports = {
  callback,
  routeData,
};
