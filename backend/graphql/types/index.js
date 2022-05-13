const amenitieTypeField = `
    name:String,
    description:String,
    active:Boolean,
`;

const departementTypeField = `
    nameDepartement:String,
    codeDepartement:String,
    active:Boolean,
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
// City Type
exports.cityTypes = `
    type City {
        _id: ID,
        name:String,
        region:Region,
        country:Country,
        latitude:String,
        longitude:String,
        wikiDataId:String,
    }
    input CityInput {
        name:String,
        region:String,
        country:String,
        latitude:String,
        longitude:String,
        wikiDataId:String,
    }
`;
// Country Type
exports.countryTypes = `
    type Country {
        _id: ID,
        name:String,
        iso3:String,
        iso2:String,
        numeric_code:Int,
        phone_code:String,
        capital:String,
        currency:String,
        currency_name:String,
        currency_symbol:String,
        tld:String,
        native:String,
        region:String,
        subregion:String,
        timezones:[Timezone],
        translations:Translations,
        latitude:String,
        longitude:String,
        emoji:String,
        emojiU:String,
    }
    input CountryInput {
        name:String,
        iso3:String,
        iso2:String,
        numeric_code:Int,
        phone_code:String,
        capital:String,
        currency:String,
        currency_name:String,
        currency_symbol:String,
        tld:String,
        native:String,
        region:String,
        subregion:String,
        zoneName: [String],
        gmtOffset: [Int],
        gmtOffsetName: [String],
        abbreviation: [String],
        tzName: [String],
        kr: String,
        br: String,
        pt: String,
        nl: String,
        hr: String,
        fa: String,
        de: String,
        es: String
        fr: String,
        ja: String,
        it: String,
        cn: String,
        latitude:String,
        longitude:String,
        emoji:String,
        emojiU:String,
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
// Type price
exports.priceTypes = `
    
    type Price {
        _id: ID,
        roomType:RoomType,
        mon:Int,
        tue:Int,
        wed:Int,
        thu:Int,
        fri:Int,
        sat:Int,
        sun:Int,
        priceType:String,
        special:special,
    }
    input PriceInput {
        roomType:String,
        mon:Int,
        tue:Int,
        wed:Int,
        thu:Int,
        fri:Int,
        sat:Int,
        sun:Int,
        priceType:String,
            title:String,
            description:String,
            startDate:Date,
            endDate:Date,
    }
`;
// Region Type
exports.regionTypes = `
    type Region {
        _id: ID,
        name:String,
        country:Country,
        wikiDataId:String,
    }
    input RegionInput {
        name:String,
        country:String,
        wikiDataId:String,
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
    typeRoom:String,
    status:String,
    }
    input RoomInput {
        name:String,
        floor:String,
        roomType:String,
        statusRoom:String,
        typeRoom:String,
        status:String,
}
`;
// Types Room Type
exports.roomTypes = `
    type RoomType {
    _id: ID,
    nameType: String,
    codeType: String,
    imageType: String,
    image: [String],
    description: String,
    baseOccupancy: Int,
    kidsOccupancy: Int,
    amenities : [String],
    typeBed: String,
    extraBed: Int,
    maxOccupancy: Int,
    basePrice: Int,
    additionalPersonPrice: Int,
    extraBedPrice: Int,
    typeRoom: String,
    }
    type RoomTypeAmenitie {
    _id: ID,
    nameType: String,
    codeType: String,
    imageType: String,
    image: [String],
    description: String,
    baseOccupancy: Int,
    kidsOccupancy: Int,
    amenities : [Amenitie]
    typeBed: String,
    extraBed: Int,
    maxOccupancy: Int,
    basePrice: Int,
    additionalPersonPrice: Int,
    extraBedPrice: Int,
    typeRoom: String,
        }
input RoomTypeInput {
        nameType: String,
        codeType: String,
        imageType: String,
        image: [String],
        description: String,
        baseOccupancy: Int,
        kidsOccupancy: Int,
        amenities : [String]
        typeBed: String,
        extraBed: Int,
        maxOccupancy: Int,
        basePrice: Int,
        additionalPersonPrice: Int,
        extraBedPrice: Int,
        typeRoom: String,
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
    DOB:Date,
    departement:Departement,
    designation:Designation,
    country:Country,
    city:City,
    region:Region,
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
        DOB:Date,
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
    input userUpdateDataInput {
        firstName:String,
        lastName:String,
        username:String,
        email:String,
        gender:String,
        DOB:Date,
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
