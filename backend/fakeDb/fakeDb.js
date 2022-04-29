const fetchJsonRegion = require("./region");
const fetchJsonCountry = require("./country");
const fetchJsonCity = require("./city");
const Region = require("../database/models/region");
const Country = require("../database/models/country");
const City = require("../database/models/city");
class FakeDb {
  async clean() {
    // await Country.deleteMany({});
    // await Region.deleteMany({});
    // await City.deleteMany({});
  }
  async addData() {
    // await Country.create(await fetchJsonCountry());
    // await Region.create(await fetchJsonRegion());
    await City.create(await fetchJsonCity());
  }
  async populate() {
    // await this.clean();
    await this.addData();
  }
}

module.exports = new FakeDb();
