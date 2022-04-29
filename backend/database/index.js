const mongoose = require("mongoose");
const session = require("express-session");
const MongoStore = require("connect-mongodb-session")(session);
const config = require("../config/dev");
require("./models/roomtype");
require("./models/floors");
require("./models/rooms");
require("./models/departement");
require("./models/designation");
require("./models/user");
require("./models/payment");
require("./models/price");
require("./models/booking");
require("./models/service");
require("./models/amenities");
require("./models/statusRoom");
require("./models/country");
require("./models/city");
require("./models/region");
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
