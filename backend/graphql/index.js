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
  cityQuery,
  countryQuery,
  departementQuery,
  designationQuery,
  floorQuery,
  paymentQuery,
  priceQuery,
  regionQuery,
  roomQuery,
  roomTypeQuery,
  serviceQuery,
  statusRoomQuery,
  userQuery,
  amenitieMutation,
  bookingMutation,
  cityMutation,
  countryMutation,
  departementMutation,
  designationMutation,
  floorMutation,
  paymentMutation,
  priceMutation,
  regionMutation,
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
  cityTypes,
  countryTypes,
  departementTypes,
  designationsTypes,
  floorTypes,
  paymentTypes,
  priceTypes,
  regionTypes,
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
const City = require("./models/City");
const Country = require("./models/Country");
const Departement = require("./models/Departement");
const Designation = require("./models/Designation");
const Floor = require("./models/Floors");
const Payment = require("./models/Payment");
const Price = require("./models/Price");
const Region = require("./models/Region");
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
  type Timezone {
    zoneName: String
    gmtOffset: Int
    gmtOffsetName: String
    abbreviation: String
    tzName: String
  }
  type Translations {
    kr: String
    br: String
    pt: String
    nl: String
    hr: String
    fa: String
    de: String
    es: String
    fr: String
    ja: String
    it: String
    cn: String
  }
  ${amenitieTypes}
  ${bookingTypes}
  ${cityTypes}
  ${countryTypes}
  ${departementTypes}
  ${designationsTypes}
  ${floorTypes}
  ${paymentTypes}
  ${priceTypes}
  ${regionTypes}
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

    city(id: ID!): City
    cityByRegion(regionId: ID!): [City]
    cities: [City]

    country(id: ID!): Country
    countries: [Country]

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

    region(id: ID!): Region
    regionByCountry(countryId: ID!): [Region]
    regions: [Region]

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
    userById(id: ID): User
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

    createCity(input: CityInput): City
    updateCity(id: ID!, input: CityInput): City
    deleteCity(id: ID!): ID

    createCountry(input: CountryInput): Country
    updateCountry(id: ID!, input: CountryInput): Country
    deleteCountry(id: ID!): ID

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

    createRegion(input: RegionInput): Region
    updateRegion(id: ID!, input: RegionInput): Region
    deleteRegion(id: ID!): ID

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

    updateUser(id: ID!, input: userUpdateDataInput): User
    aktifUser(id: ID!): User
    nonAktifUser(id: ID!): User

    signUp(input: UserInput): User
    signIn(input: SignInInput): User
    signOut: Boolean
  }
`;

const resolvers = {
  Upload: GraphQLUpload,
  Query: {
    ...amenitieQuery,
    ...bookingQuery,
    ...cityQuery,
    ...countryQuery,
    ...departementQuery,
    ...designationQuery,
    ...floorQuery,
    ...paymentQuery,
    ...priceQuery,
    ...regionQuery,
    ...roomQuery,
    ...roomTypeQuery,
    ...serviceQuery,
    ...statusRoomQuery,
    ...userQuery,
  },
  Mutation: {
    ...amenitieMutation,
    ...bookingMutation,
    ...cityMutation,
    ...countryMutation,
    ...departementMutation,
    ...designationMutation,
    ...floorMutation,
    ...paymentMutation,
    ...priceMutation,
    ...regionMutation,
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
        City: new City(mongoose.model("City")),
        Country: new Country(mongoose.model("Country")),
        Departement: new Departement(mongoose.model("Departement")),
        Designation: new Designation(mongoose.model("Designation")),
        Floor: new Floor(mongoose.model("Floor")),
        Payment: new Payment(mongoose.model("Payment")),
        Price: new Price(mongoose.model("Price")),
        Region: new Region(mongoose.model("Region")),
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
