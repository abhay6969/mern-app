const mongo = require("mongoose");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const captainSchema = new mongo.Schema({
  fullname: {
    firstname: {
      type: String,
      required: true,
      minlength: [3, "Fullname must be at least 3 characters long"],
    },
    lastname: {
      type: String,
      required: true,
      minlength: [3, "Lastname must be at least 3 characters long"],
    },
  },
  email:{
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    minlength: [3, "Email must be at least 3 characters long"],
  },
  password:{
    type: String,
    required: true,
    select: false,
  },
  socketid:{
    type: String,
  },
  status:{
    type:String,
    enum:['active','inactive'],
    default:'inactive'
  },
  vehicle:{
    color:{
      type: String,
      required: true,
      minlength: [3, "Color must be at least 3 characters long"],
    },
    plate:{
      type: String,
      required: true,
      minlength: [3, "Plate must be at least 3 characters long"],
    },
    capacity:{
      type: Number,
      required: true,
      min: [1, "Capacity must be at least 1"],
    },
    vehicleType:{
      type: String,
      required: true,
      enum:['motorcycle','car','auto'],
    }
  },
  location:{
    lat:Number,
    long:Number
  }
});

captainSchema.methods.generateAuthToken = function () {
  const token = jwt.sign({ _id:this._id},process.env.JWT_SECRET,{expiresIn:"24h"});
  return token;
}
captainSchema.methods.comparePassword = async function (password) {
  return await bcrypt.compare(password, this.password);
}
captainSchema.statics.hashPassword = async function (password) {
  return await bcrypt.hash(password, 10);
}

captainModel = mongo.model("captain",captainSchema);
module.exports = captainModel;