const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const userSchema = new mongoose.Schema({
  image: String,
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
    minlength: 5,
  },
  email: {
    type: String,
    lowercase: true,
    unique: true,
    index: true,
    match: [
      /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
      "Please fill a valid email address",
    ],
  },
  gender: {
    type: String,
    enum: ["male", "female"],
    default: "male",
  },
  password: {
    type: String,
    required: true,
    minlength: [8, "Password must be at least 8 characters long"],
    maxlength: [32, "Password must be at most 32 characters long"],
  },
  DOB: {
    type: Date,
    default: Date.now,
  },
  departement: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Departement",
    default: null,
  },
  designation: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Designation",
    default: null,
  },
  country: String,
  city: String,
  region: String,
  address: String,
  identitas: {
    type: String,
    required: true,
    enum: ["KTP", "SIM", "PASSPORT"],
    default: "KTP",
  },
  noIdentitas: {
    type: String,
    minlength: [16, "KTP must be 16 characters long"],
    maxlength: [32, "KTP above be 32 characters long"],
    unique: true,
  },
  phone: {
    type: String,
    required: true,
    minlength: [10, "Phone must be 10 characters long"],
    maxlength: [16, "Phone above be 16 characters long"],
  },
  role: {
    type: String,
    enum: ["admin", "guests", "employes"],
    default: "guests",
  },
  active: {
    type: Boolean,
    default: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

userSchema.pre("save", function (next) {
  const user = this;
  bcrypt.genSalt(10, function (err, salt) {
    if (err) {
      return next(err);
    }
    bcrypt.hash(user.password, salt, function (err, hash) {
      if (err) {
        return next(err);
      }
      user.password = hash;
      next();
    });
  });
});
userSchema.methods.validatePassword = function (password, done) {
  bcrypt.compare(password, this.password, function (error, isMatch) {
    if (error) {
      return done(error);
    }
    done(null, isMatch);
  });
};
module.exports = mongoose.model("User", userSchema);
