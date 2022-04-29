const url = require("./cities2.json");
const mongoose = require("mongoose");
const Country = require("../database/models/country");
const Region = require("../database/models/region");

const fetchJsonCity = async () => {
  try {
    const cities = [];
    const city = await url;
    const cityAsync = async (item) => {
      const country = await Country.findOne({
        name: item.country_name,
      });
      const region = await Region.findOne({
        name: item.state_name,
      });
      item.region = region && region._id;
      item.country = country && country._id;
      return item;
    };

    const cityPromise = async () => {
      return Promise.all(city.map((item) => cityAsync(item)));
    };
    await cityPromise().then((data) => {
      cities.push(...data);
    });
    return cities;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchJsonCity;
