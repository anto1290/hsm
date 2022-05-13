const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const config = require("../config/dev");
require("./models/roomtype");
require("./models/floors");
require("./models/rooms");
require("./models/city");
require("./models/country");
require("./models/departement");
require("./models/designation");
require("./models/user");
require("./models/payment");
require("./models/price");
require("./models/booking");
require("./models/region");
require("./models/service");
require("./models/amenities");
require("./models/statusRoom");
exports.connect = () => {
  mongoose.connect(
    config.BD_URI,
    {
      useNewUrlParser: true,
    },
    () => {
      console.log("Database connected");
    }
  );
};

exports.initSessionStore = () => {
  const store = new MongoStore({
    uri: config.BD_URI,
    collection: "hotelSession",
  });

  return store;
};
