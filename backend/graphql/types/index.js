const amenitieTypeField = `
    name:String,
    description:String,
    active:Boolean,
`;

const departementTypeField = `
    nameDepartement:String,
    active:Boolean,
    createdAt:Date,
    updatedAt:Date,
    `;
const designationsTypeField = `
    nameDesignation:String,
    active:Boolean,
`;
const floorTypeField = `
    name:String,
    numberFloor:Int,
    description:String,
    `;

const roomTypeField = `
nameType: String,
codeType: String,
imageType: String,
image: [String],
description: String,
baseOccupancy: Int,
kidsOccupancy: Int,
amenities: [String],
typeBed: String,
extraBed: Int,
maxOccupancy: Int,
basePrice: Int,
additionalPersonPrice: Int,
extraBedPrice: Int,
`;

const statusRoomField = `
nameStatus: String,
codeName: String,
description: String,
`;
// Type amenitie
exports.amenitieTypes = `
    type Amenitie {
        _id: ID,
        ${amenitieTypeField}
    }
    input AmenitieInput {
    ${amenitieTypeField}
}
`;
// Type booking
exports.bookingTypes = `
    type Booking {
        _id: ID,
        roomType:RoomType,
    user:User,
    checkin:Date,
    checkout:Date,
    Occupancy:Int,
    kidsOccupancy:Int,
    service:[Service],
    status:String,
    paymentStatus:String,
    }
    input BookingInput {
        roomType:String,
        user:String,
        checkin:Date,
        checkout:Date,
        Occupancy:Int,
        kidsOccupancy:Int,
        service:[String],
        status:String,
        paymentStatus:String,
}
`;
// Type departement
exports.departementTypes = `
    type Departement {
        _id: ID,
        ${departementTypeField}
    }
    input DepartementInput {
    ${departementTypeField}
}
`;
// Type designations
exports.designationsTypes = `
    type Designation {
        _id: ID,
        ${designationsTypeField}
    }
    input DesignationInput {
    ${designationsTypeField}
}
`;

// Type floor
exports.floorTypes = `
    type Floor {
        _id: ID,
        ${floorTypeField}
    }
    input FloorInput {
    ${floorTypeField}
}
`;
// Type payment
exports.paymentTypes = `
    type Payment {
        _id: ID,
        booking:Booking,
        paymentDate:Date,
        paymentAmount:Int,
        extraPayment:Int,
        paymentMethod:String,
        paymentStatus:String,
    }
    input PaymentInput {
        booking:String,
        paymentDate:Date,
        paymentAmount:Int,
        extraPayment:Int,
        paymentMethod:String,
        paymentStatus:String,
}
`;
// Type room
exports.roomsTypes = `
    type Room {
        _id: ID,
        name:String,
    floor:Floor,
    roomType:RoomType,
    statusRoom:StatusRoom,
    status:String,
    }
    input RoomInput {
        name:String,
        floor:String,
        roomType:String,
        statusRoom:String,
        status:String,
}
`;
// Types Room Type
exports.roomTypes = `
    type RoomType {
    _id: ID,
    ${roomTypeField}
    }
    input RoomTypeInput {
    ${roomTypeField}
    }
    `;
// Type service
exports.serviceTypes = `
    type Service {
        _id: ID,
        name:String,
        roomType:[RoomType],
        price:Int,
        typePrice:String,
        description:String,
        active:Boolean,
    }
    input ServiceInput {
        name:String,
        roomType:[String],
        price:Int,
        typePrice:String,
        description:String,
        active:Boolean,
    }
    `;

// Type Status HK
exports.statusRoomTypes = `
    type StatusRoom {
    _id: ID,
    ${statusRoomField}
    }
    input StatusRoomInput {
    ${statusRoomField}
    }
    `;
// Type User
exports.userTypes = `
    type User {
    _id: ID,
    image:String,
    firstName:String,
    lastName:String,
    username:String,
    email:String,
    gender:String,
    password:String,
    BOD:Date,
    departement:Departement,
    designation:Designation,
    country:String,
    city:String,
    region:String,
    address:String,
    identitas:String,
    noIdentitas:String,
    phone:String,
    role:String,
    active:Boolean,
    }

    input UserFilterRoleInput {
        role:StringQueryOperatorInput,
    }
    
    input UserInput {
        image:String,
        firstName:String,
        lastName:String,
        username:String,
        email:String,
        gender:String,
        password:String,
        passwordConfirm:String,
        BOD:Date,
        departement:String,
        designation:String,
        country:String,
        city:String,
        region:String,
        address:String,
        identitas:String,
        noIdentitas:String,
        phone:String,
        role:String,
    }
    input SignInInput {
        email: String!
        password: String!
    }
    input StringQueryOperatorInput {
        eq: String
        ne: String
        in: [String]
        nin: [String]
        regex: String
        glob: String
      }
`;
exports.FileType = `
    type File {
        filename: String,
        mimetype: String,
        encoding: String,
    }
`;
