const mongoose = require("mongoose");

const connectToDb = async (db) => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mydb");
    console.log("connection established to db");
  } catch (error) {
    console.error(error);
    console.log(error);
  }
};



const userSchema = new mongoose.Schema({
  fullName: {
    type: String,
    required: [true , " Name is required"],
    trim: true,
  },
  email: {
    type: String,
    required: [true , " Email is required"],
    unique: true,
    lowercase: true,
    validate: {
      validator: function (v) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v);
      },
      message: "Invalid email address",
    },
  },
  mobileNumber: {
    type: String,
    required: [true , "Mobile Number is required"],
    unique: true,
    validate: {
      validator: function (v) {
        return /^[0-9]{10}$/.test(v);
      },
      message: "Invalid mobile number",
    },
  },
  comment: {
    type: String,
    required: [true , "Comment is required"],
  },

    
} );

connectToDb();


const userModel = mongoose.model("User", userSchema);

module.exports = {  userModel };
