const url = require("./states.json");
const mongoose = require("mongoose");
const Country = require("../database/models/country");
const fetchJsonRegion = async () => {
  try {
    const regions = [];
    const region = await url;
    const regionAsync = async (item) => {
      const country = await Country.findOne({
        name: item.country_name,
        iso2: item.country_code,
      });
      item.country = country && country._id;
      item.region_code = item.state_code;
      return item;
    };

    const regionPromise = async () => {
      return Promise.all(region.map((item) => regionAsync(item)));
    };
    await regionPromise().then((data) => {
      regions.push(...data);
    });
    return regions;
  } catch (error) {
    console.log(error);
  }
};

module.exports = fetchJsonRegion;
