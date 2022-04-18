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
      amenities
      typeBed
      extraBed
      extraBedPrice
      maxOccupancy
      basePrice
      additionalPersonPrice
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
// Users
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
      }
      designation {
        _id
      }
      gender
      BOD
      country
      city
      region
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
const SIGN_UP = gql`
  mutation SignUp(
    $image: String
    $firstName: String!
    $lastName: String!
    $username: String!
    $email: String!
    $gender: String
    $password: String!
    $passwordConfirm: String!
    $BOD: Date
    $departement: String
    $designation: String
    $country: String
    $city: String
    $region: String
    $address: String
    $identitas: String!
    $noIdentitas: String!
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
        BOD: $BOD
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
      user {
        _id
        username
        email
        password
      }
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
  GET_FLOOR,
  GET_FLOORS,
  CREATE_FLOOR,
  UPDATE_FLOOR,
  DELETE_FLOOR,
  GET_ROOMTYPE,
  GET_ROOMTYPES,
  CREATE_ROOMTYPE,
  UPDATE_ROOMTYPE,
  DELETE_ROOMTYPE,
  GET_STATUSROOM,
  GET_USER,
  GET_USERROLE,
  SIGN_IN,
  SIGN_UP,
  SIGN_OUT,
};
