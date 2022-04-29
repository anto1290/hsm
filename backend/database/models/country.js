const mongoose = require("mongoose");

const countrySchema = new mongoose.Schema({
  name: String,
  iso3: String,
  iso2: String,
  numeric_code: Number,
  phone_code: String,
  capital: String,
  currency: String,
  currency_name: String,
  currency_symbol: String,
  tld: String,
  native: String,
  region: String,
  subregion: String,
  timezones: [
    {
      zoneName: String,
      gmtOffset: Number,
      gmtOffsetName: String,
      abbreviation: String,
      tzName: String,
    },
  ],
  translations: {
    kr: String,
    br: String,
    pt: String,
    nl: String,
    hr: String,
    fa: String,
    de: String,
    es: String,
    fr: String,
    ja: String,
    it: String,
    cn: String,
  },
  latitude: String,
  longitude: String,
  emoji: String,
  emojiU: String,
});

module.exports = mongoose.model("Country", countrySchema);
