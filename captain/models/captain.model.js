import mongoose from "mongoose";

const captainSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

//remove password string after saving data
captainSchema.post("save", function (doc, next) {
  doc.password = "";
  next();
});

const Captain = mongoose.model("captain", captainSchema);

export default Captain;
