import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
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
  GET_USERROLE,
  GET_USER,
  SIGN_UP,
  SIGN_IN,
  SIGN_OUT,
  GET_STATUSROOM,
  UPLOAD_IMAGE,
  UPLOAD_MULTIIMAGE,
  DELETE_IMAGE,
  DELETE_IMAGEMULTI,
  GET_REGION,
  GET_REGIONBYCOUNTRY,
  GET_REGIONS,
  GET_ROOM,
  GET_ROOMS,
  CREATE_ROOM,
  UPDATE_ROOM,
  DELETE_ROOM,
  GET_ROOMTYPE,
  GET_ROOMTYPES,
  CREATE_ROOMTYPE,
  UPDATE_ROOMTYPE,
  DELETE_ROOMTYPE,
  GET_ROOMTYPEAMENITIE,
  GET_PRICE,
  GET_PRICES,
  CREATE_PRICE,
  DELETE_PRICE,
  UPDATE_PRICE,
  GET_SERVICE,
  GET_SERVICES,
  GET_CREATESERVICE,
  GET_UPDATESERVICE,
  GET_DELETESERVICE,
  GET_USERBYID,
  UPDATE_USER
} from "../queries";

// Query
// Amenitie
const useGetAmenitie = () => useLazyQuery(GET_AMENITIE);
const useGetAmenities = () => useQuery(GET_AMENITIES);
// City
const useGetCity = () => useQuery(GET_CITY);
const useGetCityByRegion = () => useLazyQuery(GET_CITYBYREGION);
const useGetCities = () => useQuery(GET_CITIES);
// Country
const useGetCountry = () => useQuery(GET_COUNTRY);
const useGetCountries = () => useQuery(GET_COUNTRIES);
// Departement
const useGetDepartement = () => useLazyQuery(GET_DEPARTEMENT);
const useGetDepartements = () => useQuery(GET_DEPARTEMENTS);
// Designations
const useGetDesignation = () => useLazyQuery(GET_DESIGNATION);
const useGetDesignations = () => useQuery(GET_DESIGNATIONS);
// Floor
const useGetFloor = () => useLazyQuery(GET_FLOOR);
const useGetFloors = () => useQuery(GET_FLOORS);
// Price
const useGetPrice = (option) => useQuery(GET_PRICE, option);
const useGetPrices = () => useQuery(GET_PRICES);
// Region
const useGetRegion = () => useQuery(GET_REGION);
const useGetRegionByCountry = () => useLazyQuery(GET_REGIONBYCOUNTRY);
const useGetRegions = () => useQuery(GET_REGIONS);
// Room
const useGetRoom = () => useLazyQuery(GET_ROOM);
const useGetRooms = () => useQuery(GET_ROOMS);
// Room Type
const useGetRoomType = (options) => useQuery(GET_ROOMTYPE, options);
const useGetRoomTypeAmenitie = (options) =>
  useQuery(GET_ROOMTYPEAMENITIE, options);
const useGetRoomTypes = () => useQuery(GET_ROOMTYPES);
// Status Room
const useStatusRooms = () => useQuery(GET_STATUSROOM);
// Service
const useGetService = (options) => useQuery(GET_SERVICE, options);
const useGetServices = () => useQuery(GET_SERVICES);
// Users
const useGetUserById = () => useLazyQuery(GET_USERBYID);
const useLazyGetUser = () => useLazyQuery(GET_USER);
const useGetUser = () => useQuery(GET_USER);
const userGetUsersRoleEmployes = () => useLazyQuery(GET_USERROLE);
// Mutation
// IMAGE
const useUploadImage = () => useMutation(UPLOAD_IMAGE);
const useDeleteImage = () => useMutation(DELETE_IMAGE);
const useDeleteImageMulti = () => useMutation(DELETE_IMAGEMULTI);
const useUploadMultiImage = () => useMutation(UPLOAD_MULTIIMAGE);
// Amenitie
const useCreateAmenitie = () =>
  useMutation(CREATE_AMENITIE, {
    update(cache, { data: { createAmenitie } }) {
      const { amenities } = cache.readQuery({ query: GET_AMENITIES });
      cache.writeQuery({
        query: GET_AMENITIES,
        data: { amenities: [...amenities, createAmenitie] },
      });
    },
  });
const useUpdateAmenitie = () => useMutation(UPDATE_AMENITIE);
const useDeleteAmenitie = () =>
  useMutation(DELETE_AMENITIE, {
    update(cache, { data: { deleteAmenitie } }) {
      const { amenities } = cache.readQuery({ query: GET_AMENITIES });
      const newAmenities = amenities.filter((p) => p._id !== deleteAmenitie);
      cache.writeQuery({
        query: GET_AMENITIES,
        data: { amenities: newAmenities },
      });
    },
  });
// Departement
const useCreateDepartement = () => useMutation(CREATE_DEPARTEMENT, {
  update(cache, { data: { createDepartement } }) {
    const { departements } = cache.readQuery({ query: GET_DEPARTEMENTS });
    cache.writeQuery({
      query: GET_DEPARTEMENTS,
      data: { departements: [...departements, createDepartement] },
    });
  }
});
const useUpdateDepartement = () => useMutation(UPDATE_DEPARTEMENT);
const useDeleteDepartement = () => useMutation(DELETE_DEPARTEMENT, {
  update(cache, { data: { deleteDepartement } }) {
    const { departements } = cache.readQuery({ query: GET_DEPARTEMENTS });
    const newDepartements = departements.filter((p) => p._id !== deleteDepartement);
    cache.writeQuery({
      query: GET_DEPARTEMENTS,
      data: { departements: newDepartements },
    });
  }
});
// Designations
const useCreateDesignation = () => useMutation(CREATE_DESIGNATION, {
  update(cache, { data: { createDesignation } }) {
    const { designations } = cache.readQuery({ query: GET_DESIGNATIONS });
    cache.writeQuery({
      query: GET_DESIGNATIONS,
      data: { designations: [...designations, createDesignation] },
    });
  }
});
const useUpdateDesignation = () => useMutation(UPDATE_DESIGNATION);
const useDeleteDesignation = () => useMutation(DELETE_DESIGNATION, {
  update(cache, { data: { deleteDesignation } }) {
    const { designations } = cache.readQuery({ query: GET_DESIGNATIONS });
    const newDesignations = designations.filter((p) => p._id !== deleteDesignation);
    cache.writeQuery({
      query: GET_DESIGNATIONS,
      data: { designations: newDesignations },
    });
  }
});

// Floor
const useCreateFloor = () =>
  useMutation(CREATE_FLOOR, {
    update(cache, { data: { createFloor } }) {
      const { floors } = cache.readQuery({ query: GET_FLOORS });
      cache.writeQuery({
        query: GET_FLOORS,
        data: { floors: [...floors, createFloor] },
      });
    },
  });
const useUpdateFloor = () => useMutation(UPDATE_FLOOR);
const useDeleteFloor = () =>
  useMutation(DELETE_FLOOR, {
    update(cache, { data: { deleteFloor } }) {
      const { floors } = cache.readQuery({ query: GET_FLOORS });
      const newFloors = floors.filter((p) => p._id !== deleteFloor);
      cache.writeQuery({
        query: GET_FLOORS,
        data: { floors: newFloors },
      });
    },
  });
const useCreatePrice = () => useMutation(CREATE_PRICE, {
  update(cache, { data: { createPrice } }) {
    const { prices } = cache.readQuery({ query: GET_PRICES });
    cache.writeQuery({
      query: GET_PRICES,
      data: { prices: [...prices, createPrice] },
    });
  },
});
const useUpdatePrice = () => useMutation(UPDATE_PRICE);
const useDeletePrice = () => useMutation(DELETE_PRICE, {
  update(cache, { data: { deletePrice } }) {
    const { prices } = cache.readQuery({ query: GET_PRICES });
    const newPrices = prices.filter((p) => p._id !== deletePrice);
    cache.writeQuery({
      query: GET_PRICES,
      data: { prices: newPrices },
    });
  },
});
// Room
const useCreateRoom = () =>
  useMutation(CREATE_ROOM, {
    update(cache, { data: { createRoom } }) {
      const { rooms } = cache.readQuery({ query: GET_ROOMS });
      cache.writeQuery({
        query: GET_ROOMS,
        data: { rooms: [...rooms, createRoom] },
      });
    },
  });
const useUpdateRoom = () => useMutation(UPDATE_ROOM)
const useDeleteRoom = () => useMutation(DELETE_ROOM, {
  update(cache, { data: { deleteRoom } }) {
    const { rooms } = cache.readQuery({ query: GET_ROOMS });
    const newRooms = rooms.filter((p) => p._id !== deleteRoom);
    cache.writeQuery({
      query: GET_ROOMS,
      data: { rooms: newRooms },
    });
  },
});

// Room Type
const useCreateRoomType = () =>
  useMutation(CREATE_ROOMTYPE, {
    update(cache, { data: { createRoomType } }) {
      const { roomType } = cache.readQuery({ query: GET_ROOMTYPES });
      cache.writeQuery({
        query: GET_ROOMTYPES,
        data: { roomType: [...roomType, createRoomType] },
      });
    },
  });
const useUpdateRoomType = () => useMutation(UPDATE_ROOMTYPE);
const useDeleteRoomType = () =>
  useMutation(DELETE_ROOMTYPE, {
    update(cache, { data: { deleteRoomType } }) {
      const { roomTypes } = cache.readQuery({ query: GET_ROOMTYPES });
      const newRoomType = roomTypes.filter((p) => p._id !== deleteRoomType);
      cache.writeQuery({
        query: GET_ROOMTYPES,
        data: { roomType: newRoomType },
      });
    },
  });
// Service
const useCreateService = () => useMutation(GET_CREATESERVICE, {
  update(cache, { data: { createService } }) {
    const { services } = cache.readQuery({ query: GET_SERVICES });
    cache.writeQuery({
      query: GET_SERVICES,
      data: { services: [...services, createService] }
    })
  }
});
const useUpdateService = () => useMutation(GET_UPDATESERVICE);
const useDeleteService = () => useMutation(GET_DELETESERVICE, {
  update(cache, { data: deleteService }) {
    const { services } = cache.readQuery({ query: GET_SERVICES });
    const newServices = services.filter((p) => p._id !== deleteService);
    cache.writeQuery({
      query: GET_SERVICES,
      data: { services: newServices }
    })
  }
})

// User
const useUpdateUser = () => useMutation(UPDATE_USER)
const useSignUp = () => useMutation(SIGN_UP);
const useSignIn = () =>
  useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser } }) {
      cache.writeQuery({
        query: GET_USER,
        data: { user: signedInUser },
      });
    },
  });
const useSignOut = () => useMutation(SIGN_OUT);
export {
  useUploadImage,
  useDeleteImageMulti,
  useDeleteImage,
  useUploadMultiImage,
  useGetAmenitie,
  useGetAmenities,
  useCreateAmenitie,
  useUpdateAmenitie,
  useDeleteAmenitie,
  useGetCity,
  useGetCityByRegion,
  useGetCities,
  useGetCountry,
  useGetCountries,
  useGetDepartement,
  useGetDepartements,
  useCreateDepartement,
  useUpdateDepartement,
  useDeleteDepartement,
  useGetDesignation,
  useGetDesignations,
  useCreateDesignation,
  useUpdateDesignation,
  useDeleteDesignation,
  useGetFloor,
  useGetFloors,
  useCreateFloor,
  useUpdateFloor,
  useDeleteFloor,
  useGetPrice,
  useGetPrices,
  useCreatePrice,
  useUpdatePrice,
  useDeletePrice,
  useGetRegion,
  useGetRegionByCountry,
  useGetRegions,
  useGetRoom,
  useGetRooms,
  useCreateRoom,
  useUpdateRoom,
  useDeleteRoom,
  useGetRoomType,
  useGetRoomTypeAmenitie,
  useGetRoomTypes,
  useCreateRoomType,
  useUpdateRoomType,
  useDeleteRoomType,
  useGetService,
  useGetServices,
  useCreateService,
  useUpdateService,
  useDeleteService,
  userGetUsersRoleEmployes,
  useLazyGetUser,
  useGetUser,
  useUpdateUser,
  useGetUserById,
  useSignUp,
  useSignIn,
  useSignOut,
  useStatusRooms,
};
