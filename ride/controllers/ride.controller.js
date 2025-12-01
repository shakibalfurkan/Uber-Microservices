import { Ride } from "../models/ride.model.js";
// import { publishToQueue } from "../utils/rabbitmq.js";
const createRide = async (req, res, next) => {
  const { pickup, destination } = req.body;

  const newRide = new Ride({
    user: req.user._id,
    pickup,
    destination,
  });

  await newRide.save();
  // publishToQueue("ride-created", JSON.stringify(newRide));
  res.send(newRide);
};

const acceptRide = async (req, res, next) => {
  const { rideId } = req.query;
  const ride = await Ride.findById(rideId);
  if (!ride) {
    return res.status(404).json({ message: "Ride not found" });
  }

  ride.status = "accepted";
  await ride.save();
  //   publishToQueue("ride-accepted", JSON.stringify(ride));
  res.send(ride);
};

export const rideController = {
  createRide,
  acceptRide,
};
