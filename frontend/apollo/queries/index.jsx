import { gql } from "@apollo/client";

// Image
const UPLOAD_IMAGE = gql`
  mutation imageUpload($file: Upload!) {
    imageUpload(file: $file)
  }
`;
const DELETE_IMAGE = gql`
  mutation DeleteImage($link: String!) {
    deleteImage(link: $link)
  }
`;
const DELETE_IMAGEMULTI = gql`
  mutation DeleteImageMulti($images: [String]!, $link: String!) {
    deleteImageMulti(images: $images, link: $link)
  }
`;
const UPLOAD_MULTIIMAGE = gql`
  mutation MultiImageUpload($file: [Upload]!) {
    multiImageUpload(file: $file)
  }
`;

// Amenities
const GET_AMENITIE = gql`
  query Amenitie($id: ID!) {
    amenitie(id: $id) {
      _id
      name
      description
      active
    }
  }
`;
const GET_AMENITIES = gql`
  query Amenities {
    amenities {
      _id
      name
      description
      active
    }
  }
`;
const CREATE_AMENITIE = gql`
  mutation CreateAmenitie(
    $name: String
    $description: String
    $active: Boolean
  ) {
    createAmenitie(
      input: { name: $name, description: $description, active: $active }
    ) {
      _id
      name
      description
      active
    }
  }
`;
const UPDATE_AMENITIE = gql`
  mutation UpdateAmenitie($id: ID!, $input: AmenitieInput!) {
    updateAmenitie(id: $id, input: $input) {
      _id
      name
      description
      active
    }
  }
`;
const DELETE_AMENITIE = gql`
  mutation DeleteAmenitie($id: ID!) {
    deleteAmenitie(id: $id)
  }
`;
// City 
const GET_CITY = gql`
  query City($id: ID!) {
    city(id: $id) {
      _id
      name
      region{
        _id
        name
      }
      country {
        _id
        name
      }
      latitude
      longitude
      wikiDataId
    }
  }
`;
const GET_CITYBYREGION = gql`
  query CityByRegion($regionId: ID!) {
    cityByRegion(regionId: $regionId) {
      _id
      name
    }
  }
`;
const GET_CITIES = gql`
  query Cities {
    cities {
      _id
      name
      region{
        _id
        name
      }
      country {
        _id
        name
      }
      latitude
      longitude
      wikiDataId
    }
  }
`;
// Country
const GET_COUNTRY = gql`
  query Country($id: ID!) {
    country(id: $id) {
        _id
        name
        iso3
        iso2
        numeric_code
        phone_code
        capital
        currency
        currency_name
        currency_symbol
        tld
        native
        region
        subregion
        latitude
        longitude
        emoji
        emojiU
    }
  }
`;
const GET_COUNTRIES = gql`
  query Countries {
    countries {
      _id
      name
      iso3
      iso2
      numeric_code
      phone_code
      capital
      currency
      currency_name
      currency_symbol
      tld
      native
      region
      subregion
      latitude
      longitude
      emoji
      emojiU
    }
  }
`;

// DEPARTEMENT
const GET_DEPARTEMENT = gql`
  query Departement($id: ID!) {
    departement(id: $id) {
      _id
      nameDepartement
      codeDepartement
      active
    }
  }
`;
const GET_DEPARTEMENTS = gql`
  query Departements {
    departements {
      _id
      nameDepartement
      codeDepartement
      active
    }
  }
`;
const CREATE_DEPARTEMENT = gql`
  mutation CreateDepartement(
    $nameDepartement: String
    $codeDepartement: String
    $active: Boolean
  ) {
    createDepartement(
      input: {
        nameDepartement: $nameDepartement
        codeDepartement: $codeDepartement
        active: $active
      }
    ) {
      _id
      nameDepartement
      codeDepartement
      active
    }
  }
`;
const UPDATE_DEPARTEMENT = gql`
  mutation UpdateDepartement($id: ID!, $input: DepartementInput!) {
    updateDepartement(id: $id, input: $input) {
      _id
      nameDepartement
      codeDepartement
      active
    }
  }
`;
const DELETE_DEPARTEMENT = gql`
  mutation DeleteDepartement($id: ID!) {
    deleteDepartement(id: $id)
  }
`;
// Designations
const GET_DESIGNATION = gql`
  query Designation($id: ID!) {
    designation(id: $id) {
      _id
      nameDesignation
      active
    }
  }
`;
const GET_DESIGNATIONS = gql`
  query Designations {
    designations {
      _id
      nameDesignation
      active
    }
  }
`;
const CREATE_DESIGNATION = gql`
  mutation CreateDesignation(
    $nameDesignation: String
    $active: Boolean
  ) {
    createDesignation(
      input: { nameDesignation: $nameDesignation, active: $active }
    ) {
      _id
      nameDesignation
      active
    }
  }
`;
const UPDATE_DESIGNATION = gql`
  mutation UpdateDesignation($id: ID!, $input: DesignationInput!) {
    updateDesignation(id: $id, input: $input) {
      _id
      nameDesignation
      active
    }
  }
`;
const DELETE_DESIGNATION = gql`
  mutation DeleteDesignation($id: ID!) {
    deleteDesignation(id: $id)
  }
`;

// Floors
const GET_FLOOR = gql`
  query FloorGET($id: String) {
    floor(id: $id) {
      _id
      name
      numberFloor
      description
    }
  }
`;
const GET_FLOORS = gql`
  query Floors {
    floors {
      _id
      name
      numberFloor
      description
    }
  }
`;
const CREATE_FLOOR = gql`
  mutation CreateFloor($name: String, $numberFloor: Int, $description: String) {
    createFloor(
      input: {
        name: $name
        numberFloor: $numberFloor
        description: $description
      }
    ) {
      _id
      name
      numberFloor
      description
    }
  }
`;

const UPDATE_FLOOR = gql`
  mutation UpdateFloor($id: ID!, $input: FloorInput) {
    updateFloor(id: $id, input: $input) {
      _id
      name
      numberFloor
      description
    }
  }
`;

const DELETE_FLOOR = gql`
  mutation DeleteFloor($id: ID) {
    deleteFloor(id: $id)
  }
`;
// Price
const GET_PRICE = gql`
  query Price($id: ID!) {
    price(id: $id) {
      _id
      roomType {
        _id
        nameType
      }
      mon
      tue
      wed
      thu
      fri
      sat
      sun
      priceType
      special{
        title
        description
        startDate
        endDate
      }
    }
  }
`;
const GET_PRICES = gql`
  query Prices {
    prices {
      _id
      roomType {
        _id
        nameType
      }
      mon
      tue
      wed
      thu
      fri
      sat
      sun
      priceType
      special{
        title
        description
        startDate
        endDate
      }
    }
  }
`;
const CREATE_PRICE = gql`
  mutation CreatePrice(
    $roomType: String
    $mon: Int
    $tue: Int
    $wed: Int
    $thu: Int
    $fri: Int
    $sat: Int
    $sun: Int
    $priceType: String
    $description: String
    $title: String
    $startDate: Date
    $endDate: Date
  ) {
    createPrice(
      input: {
        roomType: $roomType
        mon: $mon
        tue: $tue
        wed: $wed
        thu: $thu
        fri: $fri
        sat: $sat
        sun: $sun
        priceType: $priceType
          title: $title
          description: $description
          startDate: $startDate
          endDate: $endDate
      }
    ) {
      _id
      roomType {
        _id
      }
      mon
      tue
      wed
      thu
      fri
      sat
      sun
      priceType
    }
  }
`;
const UPDATE_PRICE = gql`
  mutation UpdatePrice($id: ID!, $input: PriceInput) {
    updatePrice(id: $id, input: $input) {
      _id
      roomType {
        _id
      }
      mon
      tue
      wed
      thu
      fri
      sat
      sun
      priceType
    }
  }
`;
const DELETE_PRICE = gql`
  mutation DeletePrice($id: ID!) {
    deletePrice(id: $id)
  }
`;
// Region
const GET_REGION = gql`
  query Region($id: ID!) {
    region(id: $id) {
      _id
      name
      country{
        _id
        name
      }
      wikiDataId
    }
  }
`;
const GET_REGIONBYCOUNTRY = gql`
  query Region($countryId: ID!) {
    regionByCountry(countryId: $countryId) {
      _id
      name
      country{
        _id
        name
        iso3
      }
      wikiDataId
    }
  }
`;
const GET_REGIONS = gql`
  query Regions {
    regions {
      _id
      name
      country{
        _id
        name
      }
      wikiDataId
    }
  }
`;
// Room
const GET_ROOM = gql`
  query Room($id: ID!) {
    room(id: $id) {
      _id
      name
      floor {
        _id
        name
        numberFloor
      }
      roomType {
        _id
        nameType
        codeType
      }
      statusRoom {
        _id
        nameStatus
        codeName
      }
      typeRoom
      status
    }
  }
`;
const GET_ROOMS = gql`
  query Rooms {
    rooms {
      _id
      name
      floor {
        _id
        name
        numberFloor
      }
      roomType {
        _id
        nameType
        codeType
        imageType
        baseOccupancy
        kidsOccupancy
        typeBed
        extraBed
        maxOccupancy
        basePrice
        extraBedPrice
      }
      statusRoom {
        _id
        nameStatus
        codeName
      }
      typeRoom
      status
    }
  }
`;
const CREATE_ROOM = gql`
  mutation CreateRoom(
    $name: String
    $floor: String
    $roomType: String
    $statusRoom: String
    $typeRoom: String
    $status: String
  ) {
    createRoom(
      input: {
        name: $name
        floor: $floor
        roomType: $roomType
        statusRoom: $statusRoom
        status: $status
      }
    ) {
      _id
      name
      floor{
        _id
      }
      roomType{
        _id
      }
      statusRoom{
        _id
      }
      typeRoom
      status
    }
  }
`;
const UPDATE_ROOM = gql`
  mutation UpdateRoom($id: ID!, $input: RoomInput) {
    updateRoom(id: $id, input: $input) {
      _id
      name
      floor{
        _id
      }
      roomType{
        _id
      }
      statusRoom{
        _id
      }
      typeRoom
      status
    }
  }
`;
const DELETE_ROOM = gql`
  mutation DeleteRoom($id: ID!) {
    deleteRoom(id: $id)
  }
`;

// Room Type
const GET_ROOMTYPE = gql`
  query RoomType($id: ID!) {
    roomType(id: $id) {
      _id
      nameType
      codeType
      imageType
      image
      description
      baseOccupancy
      kidsOccupancy
      amenities
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
      typeRoom
    }
  }
`;
const GET_ROOMTYPEAMENITIE = gql`
  query RoomType($id: ID!) {
    roomType(id: $id) {
      _id
      nameType
      codeType
      imageType
      image
      description
      baseOccupancy
      kidsOccupancy
      amenities {
        _id
        name
        description
      }
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
      typeRoom
    }
  }
`;
const GET_ROOMTYPES = gql`
  query RoomTypes {
    roomTypes {
      _id
      nameType
      codeType
      imageType
      image
      description
      baseOccupancy
      kidsOccupancy
      amenities {
        _id
        name
      }
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
      typeRoom
    }
  }
`;
const CREATE_ROOMTYPE = gql`
  mutation CreateRoomType(
    $nameType: String
    $codeType: String
    $imageType: String
    $image: [String]
    $description: String
    $baseOccupancy: Int
    $kidsOccupancy: Int
    $amenities: [String]
    $typeBed: String
    $extraBed: Int
    $extraBedPrice: Int
    $maxOccupancy: Int
    $basePrice: Int
    $additionalPersonPrice: Int
    $typeRoom: String
  ) {
    createRoomType(
      input: {
        nameType: $nameType
        codeType: $codeType
        imageType: $imageType
        image: $image
        description: $description
        baseOccupancy: $baseOccupancy
        kidsOccupancy: $kidsOccupancy
        amenities: $amenities
        typeBed: $typeBed
        extraBed: $extraBed
        extraBedPrice: $extraBedPrice
        maxOccupancy: $maxOccupancy
        basePrice: $basePrice
        additionalPersonPrice: $additionalPersonPrice
        typeRoom: $typeRoom
      }
    ) {
      _id
      nameType
      codeType
      imageType
      image
      description
      baseOccupancy
      kidsOccupancy
      amenities
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
      typeRoom
    }
  }
`;
const UPDATE_ROOMTYPE = gql`
  mutation UpdateRoomType($id: ID!, $input: RoomTypeInput!) {
    updateRoomType(id: $id, input: $input) {
      _id
      nameType
      codeType
      imageType
      image
      description
      baseOccupancy
      kidsOccupancy
      amenities
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
      typeRoom
    }
  }
`;
const DELETE_ROOMTYPE = gql`
  mutation DeleteRoomType($id: ID!) {
    deleteRoomType(id: $id)
  }
`;

// Status Room
const GET_STATUSROOM = gql`
  query StatusRoom {
    statusRooms {
      _id
      nameStatus
      codeName
      description
    }
  }
`;
// Services
const GET_SERVICE = gql`
  query Service($id: ID!){
    service(id:$id){
      _id,
      name,
      roomType{
        _id,
      }
      price,
      typePrice,
      description,
      active,
    }
  }
`;
const GET_SERVICES = gql`
  query Services {
    services{
      _id
      name
      roomType{
        _id
      }
      price
      typePrice
      description
      active
    }
  }
`;
const GET_CREATESERVICE = gql`
  mutation CREATESERVICE(
    $name:String,
    $roomType:[String],
    $price:Int,
    $typePrice:String,
    $description:String,
    $active:Boolean,
  ){
    createService(input: {
      name:$name
      roomType:$roomType
      price:$price
      typePrice:$typePrice
      description:$description
      active:$active
    }){
      _id
      name
      roomType{
        _id
      }
      price
      typePrice
      description
      active
    }
  }
`;
const GET_UPDATESERVICE = gql`
  mutation UpdateService($id: ID!,$input: ServiceInput){
    updateService(id: $id,input: $input){
      _id
      name
      roomType{
        _id
      }
      price
      typePrice
      description
      active
    }
  }
`;
const GET_DELETESERVICE = gql`
  mutation DeleteService($id: ID!){
    deleteService(id: $id)
  }
`
// Users
const GET_USERBYID = gql`
  query UserId($id: ID){
    userById(id: $id){
      _id
      image
      firstName
      lastName
      username
      email
      departement {
        _id
        nameDepartement
      }
      designation {
        _id
        nameDesignation
      }
      gender
      DOB
      country{
        _id
        name
      }
      city{
        _id
        name
      }
      region{
        _id
        name
      }
      address
      identitas
      noIdentitas
      phone
      role
      active
    }
  }
`;
const GET_USERROLE = gql`
  query UserRole($role: String!) {
    userRole(role: $role) {
      _id
      image
      firstName
      lastName
      username
      email
      departement {
        _id
        nameDepartement
      }
      designation {
        _id
        nameDesignation
      }
      gender
      DOB
      country{
        _id
        name
      }
      city{
        _id
        name
      }
      region{
        _id
        name
      }
      address
      identitas
      noIdentitas
      phone
      role
      active
    }
  }
`;
const GET_USER = gql`
  query User {
    user {
      _id
      firstName
      lastName
      email
      username
      role
    }
  }
`;

// Auth
// Update
const UPDATE_USER = gql`
  mutation UpdateUser ($id: ID!, $input: userUpdateDataInput) {
      updateUser(id: $id, input: $input) {
      _id
      firstName
      lastName
      email
      username
      gender
      DOB
      departement {
        _id
        nameDepartement
      }
      designation {
        _id
        nameDesignation
      }
      gender
      DOB
      country{
        _id
        name
      }
      city{
        _id
        name
      }
      region{
        _id
        name
      }
      address
      identitas
      noIdentitas
      phone
      role
    }
  }
`;
const SIGN_UP = gql`
  mutation SignUp(
    $image: String
    $firstName: String
    $lastName: String
    $username: String
    $email: String
    $gender: String
    $password: String
    $passwordConfirm: String
    $DOB: Date
    $departement: String
    $designation: String
    $country: String
    $city: String
    $region: String
    $address: String
    $identitas: String
    $noIdentitas: String
    $phone: String
    $role: String
  ) {
    signUp(
      input: {
        image: $image
        firstName: $firstName
        lastName: $lastName
        username: $username
        email: $email
        gender: $gender
        password: $password
        passwordConfirm: $passwordConfirm
        DOB: $DOB
        departement: $departement
        designation: $designation
        country: $country
        city: $city
        region: $region
        address: $address
        identitas: $identitas
        noIdentitas: $noIdentitas
        phone: $phone
        role: $role
      }
    ) {
      _id
    }
  }
`;
const SIGN_IN = gql`
  mutation SignIn($email: String!, $password: String!) {
    signIn(input: { email: $email, password: $password }) {
      _id
      firstName
      lastName
      username
      email
      role
    }
  }
`;

const SIGN_OUT = gql`
  mutation SignOut {
    signOut
  }
`;
export {
  UPLOAD_IMAGE,
  DELETE_IMAGE,
  DELETE_IMAGEMULTI,
  UPLOAD_MULTIIMAGE,
  GET_AMENITIE,
  GET_AMENITIES,
  CREATE_AMENITIE,
  UPDATE_AMENITIE,
  DELETE_AMENITIE,
  GET_CITY,
  GET_CITYBYREGION,
  GET_CITIES,
  GET_COUNTRY,
  GET_COUNTRIES,
  GET_DEPARTEMENT,
  GET_DEPARTEMENTS,
  CREATE_DEPARTEMENT,
  UPDATE_DEPARTEMENT,
  DELETE_DEPARTEMENT,
  GET_DESIGNATION,
  GET_DESIGNATIONS,
  CREATE_DESIGNATION,
  UPDATE_DESIGNATION,
  DELETE_DESIGNATION,
  GET_FLOOR,
  GET_FLOORS,
  CREATE_FLOOR,
  UPDATE_FLOOR,
  DELETE_FLOOR,
  GET_PRICE,
  GET_PRICES,
  CREATE_PRICE,
  UPDATE_PRICE,
  DELETE_PRICE,
  GET_REGION,
  GET_REGIONBYCOUNTRY,
  GET_REGIONS,
  GET_ROOM,
  GET_ROOMS,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM,
  GET_ROOMTYPE,
  GET_ROOMTYPEAMENITIE,
  GET_ROOMTYPES,
  CREATE_ROOMTYPE,
  UPDATE_ROOMTYPE,
  DELETE_ROOMTYPE,
  GET_STATUSROOM,
  GET_SERVICE,
  GET_SERVICES,
  GET_CREATESERVICE,
  GET_UPDATESERVICE,
  GET_DELETESERVICE,
  GET_USER,
  GET_USERBYID,
  GET_USERROLE,
  UPDATE_USER,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
};
