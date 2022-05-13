class City {
  constructor(model) {
    this.Model = model;
  }
  getAll() {
    return this.Model.find({});
  }
  getByRegion(regionId) {
    return this.Model.find({ region: regionId });
  }
  getById(id) {
    return this.Model.findById(id);
  }
  create(data) {
    return this.Model.create(data);
  }
  findAndUpdate(id, data) {
    return this.Model.findByIdAndUpdate(id, data, { new: true });
  }
  findAndDelete(id) {
    return this.Model.findByIdAndRemove(id);
  }
}

module.exports = City;
