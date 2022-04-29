const { ApolloServer, gql } = require("apollo-server-express");
const { createServer } = require("http");
const { GraphQLUpload } = require("graphql-upload");

const mongoose = require("mongoose");
const {
  ApolloServerPluginLandingPageGraphQLPlayground,
} = require("apollo-server-core");
const { makeExecutableSchema } = require("@graphql-tools/schema");
const {
  amenitieQuery,
  bookingQuery,
  departementQuery,
  designationQuery,
  floorQuery,
  paymentQuery,
  priceQuery,
  roomQuery,
  roomTypeQuery,
  serviceQuery,
  statusRoomQuery,
  userQuery,
  amenitieMutation,
  bookingMutation,
  departementMutation,
  designationMutation,
  floorMutation,
  paymentMutation,
  priceMutation,
  roomMutation,
  roomTypeMutation,
  serviceMutation,
  statusRoomMutation,
  userMutation,
  fileMutation,
} = require("./resolvers");
const {
  amenitieTypes,
  bookingTypes,
  departementTypes,
  designationsTypes,
  floorTypes,
  paymentTypes,
  priceTypes,
  roomsTypes,
  roomTypes,
  serviceTypes,
  statusRoomTypes,
  userTypes,
  FileType,
} = require("./types");

// Models Graphql
const Amenitie = require("./models/Amenities");
const Booking = require("./models/Booking");
const Departement = require("./models/Departement");
const Designation = require("./models/Designation");
const Floor = require("./models/Floors");
const Payment = require("./models/Payment");
const Price = require("./models/Price");
const Room = require("./models/Rooms");
const RoomType = require("./models/RoomType");
const Service = require("./models/Service");
const StatusRoom = require("./models/StatusRoom");
const User = require("./models/User");
// contex
const { buildAuthContext } = require("./context");
const typeDefs = gql`
  scalar Date
  scalar Upload
  type special {
    title: String
    description: String
    startDate: Date
    endDate: Date
  }
  ${amenitieTypes}
  ${bookingTypes}
  ${departementTypes}
  ${designationsTypes}
  ${floorTypes}
  ${paymentTypes}
  ${priceTypes}
  ${roomsTypes}
  ${roomTypes}
  ${serviceTypes}
  ${statusRoomTypes}
  ${userTypes}
  ${FileType}
  type Query {
    amenitie(id: ID!): Amenitie
    amenities: [Amenitie]

    booking(id: ID!): Booking
    bookings: [Booking]

    departement(id: ID!): Departement
    departements: [Departement]

    designation(id: ID!): Designation
    designations: [Designation]

    floor(id: String): Floor
    floors: [Floor]

    payment(id: ID!): Payment
    payments: [Payment]

    price(id: ID!): Price
    prices: [Price]

    room(id: ID!): Room
    rooms: [Room]

    roomType(id: ID!): RoomType!
    roomTypeAmenitie(id: ID!): RoomTypeAmenitie!
    roomTypes: [RoomTypeAmenitie]

    service(id: ID!): Service
    services: [Service]

    statusRoom(id: ID): StatusRoom
    statusRooms: [StatusRoom]

    user: User
    userRole(role: String!): [User!]!
  }
  type Mutation {
    imageUpload(file: Upload!): String!
    deleteImage(link: String!): Boolean!
    deleteImageMulti(images: [String]!, link: String!): [String]!
    multiImageUpload(file: [Upload]!): [String]

    createAmenitie(input: AmenitieInput!): Amenitie
    updateAmenitie(id: ID!, input: AmenitieInput!): Amenitie
    deleteAmenitie(id: ID!): ID

    createBooking(input: BookingInput): Booking
    updateBooking(id: ID!, input: BookingInput): Booking
    deleteBooking(id: ID!): ID

    createDepartement(input: DepartementInput): Departement
    updateDepartement(id: ID!, input: DepartementInput!): Departement
    deleteDepartement(id: ID!): ID

    createDesignation(input: DesignationInput): Designation
    updateDesignation(id: ID!, input: DesignationInput!): Designation
    deleteDesignation(id: ID!): ID

    createFloor(input: FloorInput): Floor
    updateFloor(id: ID!, input: FloorInput): Floor
    deleteFloor(id: ID): ID

    createPayment(input: PaymentInput): Payment
    updatePayment(id: ID!, input: PaymentInput): Payment
    deletePayment(id: ID!): ID

    createPrice(input: PriceInput): Price
    updatePrice(id: ID!, input: PriceInput): Price
    deletePrice(id: ID!): ID

    createRoom(input: RoomInput): Room
    updateRoom(id: ID!, input: RoomInput): Room
    deleteRoom(id: ID!): ID

    createRoomType(input: RoomTypeInput!): RoomType
    updateRoomType(id: ID, input: RoomTypeInput!): RoomType
    deleteRoomType(id: ID): ID

    createService(input: ServiceInput): Service
    updateService(id: ID!, input: ServiceInput): Service
    deleteService(id: ID!): ID

    createStatusRoom(input: StatusRoomInput): StatusRoom
    updateStatusRoom(id: ID, input: StatusRoomInput): StatusRoom
    deleteStatusRoom(id: ID): ID

    signUp(input: UserInput): String
    signIn(input: SignInInput): User
    signOut: Boolean
  }
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...amenitieQuery,
    ...bookingQuery,
    ...departementQuery,
    ...designationQuery,
    ...floorQuery,
    ...paymentQuery,
    ...priceQuery,
    ...roomQuery,
    ...roomTypeQuery,
    ...serviceQuery,
    ...statusRoomQuery,
    ...userQuery,
  },
  Mutation: {
    ...amenitieMutation,
    ...bookingMutation,
    ...departementMutation,
    ...designationMutation,
    ...floorMutation,
    ...paymentMutation,
    ...priceMutation,
    ...roomMutation,
    ...roomTypeMutation,
    ...serviceMutation,
    ...statusRoomMutation,
    ...userMutation,
    ...fileMutation,
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
exports.schemaApolloServer = () => {
  return schema;
};
exports.createApolloServer = () => {
  const apolloServer = new ApolloServer({
    schema,
    context: ({ req }) => ({
      ...buildAuthContext(req),
      models: {
        Amenitie: new Amenitie(mongoose.model("Amenitie")),
        Booking: new Booking(mongoose.model("Booking")),
        Departement: new Departement(mongoose.model("Departement")),
        Designation: new Designation(mongoose.model("Designation")),
        Floor: new Floor(mongoose.model("Floor")),
        Payment: new Payment(mongoose.model("Payment")),
        Price: new Price(mongoose.model("Price")),
        Room: new Room(mongoose.model("Room")),
        RoomType: new RoomType(mongoose.model("RoomType")),
        Service: new Service(mongoose.model("Service")),
        StatusRoom: new StatusRoom(mongoose.model("StatusRoom")),
        User: new User(mongoose.model("User")),
      },
    }),
    plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
  });
  return apolloServer;
};
