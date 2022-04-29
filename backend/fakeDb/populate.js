const mongoose = require("mongoose");
const config = require("../config/dev");
const fakeDb = require("./FakeDb");

mongoose.connect(
  config.BD_URI,
  {
    useNewUrlParser: true,
  },
  async () => {
    console.log("start Populate database");
    await fakeDb.populate();
    await mongoose.connection.close();
    console.log("Pupulate is done");
  }
);
