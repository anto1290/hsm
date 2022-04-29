class Price {
  constructor(model) {
    this.Model = model;
  }
  getAll() {
    return this.Model.find({});
  }
  getById(id) {
    return this.Model.findById(id);
  }
  create(data) {
    const newFormat = {
      roomType: data.roomType,
      mon: data.mon,
      tue: data.tue,
      wed: data.wed,
      thu: data.thu,
      fri: data.fri,
      sat: data.sat,
      sun: data.sun,
      priceType: data.priceType,
      special: {
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    };
    return this.Model.create(newFormat);
  }
  findAndUpdate(id, data) {
    const newFormat = {
      roomType: data.roomType,
      mon: data.mon,
      tue: data.tue,
      wed: data.wed,
      thu: data.thu,
      fri: data.fri,
      sat: data.sat,
      sun: data.sun,
      priceType: data.priceType,
      special: {
        title: data.title,
        description: data.description,
        startDate: data.startDate,
        endDate: data.endDate,
      },
    };
    return this.Model.findByIdAndUpdate(id, newFormat, { new: true });
  }
  findAndDelete(id) {
    return this.Model.findByIdAndRemove(id);
  }
}

module.exports = Price;
