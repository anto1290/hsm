const { createWriteStream, unlinkSync } = require("fs");
const { parse, join } = require("path");
// Query
// Amenitie query
exports.amenitieQuery = {
  amenitie: async (root, { id }, ctx) => {
    return await ctx.models.Amenitie.getById(id);
  },
  amenities: async (root, args, ctx) => {
    return await ctx.models.Amenitie.getAll();
  },
};
// Booking query
exports.bookingQuery = {
  booking: async (root, { id }, ctx) => {
    return await ctx.models.Booking.getById(id);
  },
  bookings: async (root, args, ctx) => {
    return await ctx.models.Booking.getAll();
  },
};
// Departement query
exports.departementQuery = {
  departement: async (root, { id }, ctx) => {
    return await ctx.models.Departement.getById(id);
  },
  departements: async (root, args, ctx) => {
    return await ctx.models.Departement.getAll();
  },
};
// Designations query
exports.designationQuery = {
  designation: async (root, args, ctx) => {
    return await ctx.models.Designation.getAll();
  },
  designations: async (root, args, ctx) => {
    return await ctx.models.Departement.getAll();
  },
};

// Floor query
exports.floorQuery = {
  floor: async (root, { id }, ctx) => {
    return await ctx.models.Floor.getById(id);
  },
  floors: async (root, args, ctx) => {
    return await ctx.models.Floor.getAll();
  },
};
// payment query
exports.paymentQuery = {
  payment: async (root, { id }, ctx) => {
    return await ctx.models.Payment.getById(id);
  },
  payments: async (root, args, ctx) => {
    return await ctx.models.Payment.getAll();
  },
};
// Room Query
exports.roomQuery = {
  room: async (root, { id }, ctx) => {
    return await ctx.models.Room.getById(id);
  },
  rooms: async (root, args, ctx) => {
    return await ctx.models.Room.getAll();
  },
};
// Room Type Query
exports.roomTypeQuery = {
  roomType: async (root, { id }, ctx) => {
    return await ctx.models.RoomType.getById(id);
  },
  roomTypes: async (root, args, ctx) => {
    return await ctx.models.RoomType.getAll();
  },
};

// Service Query
exports.serviceQuery = {
  service: async (root, { id }, ctx) => {
    return await ctx.models.Service.getById(id);
  },
  services: async (root, args, ctx) => {
    return await ctx.models.Service.getAll();
  },
};

// statusRoom Query
exports.statusRoomQuery = {
  statusRoom: async (root, { id }, ctx) => {
    return await ctx.models.StatusRoom.getById(id);
  },
  statusRooms: async (root, args, ctx) => {
    return await ctx.models.StatusRoom.getAll();
  },
};
// user query
exports.userQuery = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  },
  userRole: async (root, { role }, ctx) => {
    return await ctx.models.User.getAllByRole(role);
  },
};

// Mutations
// Amenitie mutation
exports.amenitieMutation = {
  createAmenitie: async (root, { input }, ctx) => {
    return await ctx.models.Amenitie.create(input);
  },
  updateAmenitie: async (root, { id, input }, ctx) => {
    return await ctx.models.Amenitie.findAndUpdate(id, input);
  },
  deleteAmenitie: async (root, { id }, ctx) => {
    const Amenitie = await ctx.models.Amenitie.findAndDelete(id);
    return Amenitie._id;
  },
};
// Booking mutation
exports.bookingMutation = {
  createBooking: async (root, { data }, ctx) => {
    return await ctx.models.Booking.create(data);
  },
  updateBooking: async (root, { id, data }, ctx) => {
    return await ctx.models.Booking.findAndUpdate(id, data);
  },
  deleteBooking: async (root, { id }, ctx) => {
    return await ctx.models.Booking.findAndDelete(id);
  },
};
// Departement mutation
exports.departementMutation = {
  createDepartement: async (root, { data }, ctx) => {
    return await ctx.models.Departement.create(data);
  },
  updateDepartement: async (root, { id, data }, ctx) => {
    return await ctx.models.Departement.findAndUpdate(id, data);
  },
  deleteDepartement: async (root, { id }, ctx) => {
    return await ctx.models.Departement.findAndDelete(id);
  },
};

// Designation mutation
exports.designationMutation = {
  createDesignation: async (root, { data }, ctx) => {
    return await ctx.models.Designation.create(data);
  },
  updateDesignation: async (root, { id, data }, ctx) => {
    return await ctx.models.Designation.findAndUpdate(id, data);
  },
  deleteDesignation: async (root, { id }, ctx) => {
    return await ctx.models.Designation.findAndDelete(id);
  },
};

// Floor mutation
exports.floorMutation = {
  createFloor: async (root, { input }, ctx) => {
    return await ctx.models.Floor.create(input);
  },
  updateFloor: async (root, { id, input }, ctx) => {
    return await ctx.models.Floor.findAndUpdate(id, input);
  },
  deleteFloor: async (root, { id }, ctx) => {
    const deleteFloor = await ctx.models.Floor.findAndDelete(id);
    return deleteFloor._id;
  },
};
// Payment mutation
exports.paymentMutation = {
  createPayment: async (root, { data }, ctx) => {
    return await ctx.models.Payment.create(data);
  },
  updatePayment: async (root, { id, data }, ctx) => {
    return await ctx.models.Payment.findAndUpdate(id, data);
  },
  deletePayment: async (root, { id }, ctx) => {
    return await ctx.models.Payment.findAndDelete(id);
  },
};

// Room Mutations
exports.roomMutation = {
  createRoom: async (root, { input }, ctx) => {
    const createdRoom = await ctx.models.Room.create(input);
    return createdRoom;
  },
  updateRoom: async (root, { id, input }, ctx) => {
    const updatedRoom = await ctx.models.Room.findAndUpdate(id, input);
    return updatedRoom;
  },
  deleteRoom: async (root, { id }, ctx) => {
    const deletedRoom = await ctx.models.Room.findAndDelete(id);
    return deletedRoom._id;
  },
};
// Room Type Mutations
exports.roomTypeMutation = {
  createRoomType: async (root, { input }, ctx) => {
    const createdRoomType = await ctx.models.RoomType.create(input);
    return createdRoomType;
  },
  updateRoomType: async (root, { id, input }, ctx) => {
    const updatedRoomType = await ctx.models.RoomType.findAndUpdate(id, input);
    return updatedRoomType;
  },
  deleteRoomType: async (root, { id }, ctx) => {
    const deletedRoomType = await ctx.models.RoomType.findAndDelete(id);
    return deletedRoomType._id;
  },
};

// Service Mutations
exports.serviceMutation = {
  createService: async (root, { input }, ctx) => {
    const createdService = await ctx.models.Service.create(input);
    return createdService;
  },
  updateService: async (root, { id, input }, ctx) => {
    const updatedService = await ctx.models.Service.findAndUpdate(id, input);
    return updatedService;
  },
  deleteService: async (root, { id }, ctx) => {
    const deletedService = await ctx.models.Service.findAndDelete(id);
    return deletedService._id;
  },
};
// statusRoom Mutations
exports.statusRoomMutation = {
  createStatusRoom: async (root, { input }, ctx) => {
    const createdStatusRoom = await ctx.models.StatusRoom.create(input);
    return createdStatusRoom;
  },
  updateStatusRoom: async (root, { id, input }, ctx) => {
    const updatedStatusRoom = await ctx.models.StatusRoom.findAndUpdate(
      id,
      input
    );
    return updatedStatusRoom;
  },
  deleteStatusRoom: async (root, { id }, ctx) => {
    const deletedStatusRoom = await ctx.models.StatusRoom.findAndDelete(id);
    return deletedStatusRoom._id;
  },
};
// User Mutations
exports.userMutation = {
  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
  },
  signIn: (root, { input }, ctx) => ctx.models.User.signIn(input, ctx),
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
  },
};

// File Mutations
exports.fileMutation = {
  imageUpload: async (root, { file }) => {
    const { createReadStream, filename } = await file;
    const stream = createReadStream();
    let { ext, name } = parse(filename);
    name = name.replace(/[^a-zA-Z0-9-_]/gi, "-").replace(" ", "_");
    let imageName = `${name}-${Date.now()}${ext}`;
    let serverFile = join(__dirname, "../../uploads/", `${imageName}`);
    const url = `http://localhost:4000/uploads`;
    const writeStream = await createWriteStream(serverFile);
    await stream.pipe(writeStream);
    serverFile = `${url}${serverFile.split("uploads")[1]}`;
    return serverFile;
  },
  deleteImage: async (root, { link }) => {
    const imagePath = join(
      __dirname,
      "../../uploads/",
      `${link.split("/uploads")[1]}`
    );
    await unlinkSync(imagePath);
    return true;
  },
  deleteImageMulti: async (root, { images, link }) => {
    const index = images.indexOf(link);
    const imagePath = join(
      __dirname,
      "../../uploads/",
      `${link.split("/uploads")[1]}`
    );
    if (index > -1) {
      images.splice(index, 1);
    }
    await unlinkSync(imagePath);
    return images;
  },
  multiImageUpload: async (root, { file }) => {
    const images = [];
    for (let i = 0; i < file.length; i++) {
      const { createReadStream, filename } = await file[i];
      const stream = createReadStream();
      let { ext, name } = parse(filename);
      name = name.replace(/[^a-zA-Z0-9-_]/gi, "-").replace(" ", "_");
      let serverFile = join(
        __dirname,
        "../../uploads/",
        `${name}-${Date.now()}${ext}`
      );
      const url = `http://localhost:4000/uploads`;
      const writeStream = await createWriteStream(serverFile);
      await stream.pipe(writeStream);
      serverFile = `${url}${serverFile.split("uploads")[1]}`;
      images.push(serverFile);
    }
    return images;
  },
};
