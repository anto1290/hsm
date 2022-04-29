const url = require("./countries.json");
const mongoose = require("mongoose");
const fetchJsonCountry = async () => {
  try {
    const country = [];
    await url.map((item) => {
      const Timezones = [];
      item.timezones.map((timezone) => {
        return Timezones.push({
          zoneName: timezone.zoneName,
          gmtOffset: timezone.gmtOffset,
          gmtOffsetName: timezone.gmtOffsetName,
          abbreviation: timezone.abbreviation,
          tzName: timezone.tzName,
        });
      }),
        country.push({
          name: item.name,
          iso3: item.iso3,
          iso2: item.iso2,
          numeric_code: item.numeric_code,
          phone_code: item.phone_code,
          capital: item.capital,
          currency: item.currency,
          currency_name: item.currency_name,
          currency_symbol: item.currency_symbol,
          tld: item.tld,
          native: item.native,
          region: item.region,
          subregion: item.subregion,
          timezones: Timezones,
          translations: {
            kr: item.translations.kr,
            br: item.translations.br,
            pt: item.translations.pt,
            nl: item.translations.nl,
            hr: item.translations.hr,
            fa: item.translations.fa,
            de: item.translations.de,
            es: item.translations.es,
            fr: item.translations.fr,
            ja: item.translations.ja,
            it: item.translations.it,
            cn: item.translations.cn,
          },
          latitude: item.latitude,
          longitude: item.longitude,
          emoji: item.emoji,
          emojiU: item.emojiU,
        });
    });
    return country;
  } catch (error) {
    console.log(error);
  }
};
module.exports = fetchJsonCountry;
