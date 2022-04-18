import { useLazyQuery, useMutation, useQuery } from "@apollo/client";
import {
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
  GET_ROOMTYPE,
  GET_ROOMTYPES,
  CREATE_ROOMTYPE,
  UPDATE_ROOMTYPE,
  DELETE_ROOMTYPE,
} from "../queries";

// Query
// Amenitie
const useGetAmenitie = () => useLazyQuery(GET_AMENITIE);
const useGetAmenities = () => useQuery(GET_AMENITIES);
// Floor
const useGetFloor = () => useLazyQuery(GET_FLOOR);
const useGetFloors = () => useQuery(GET_FLOORS);
// Room Type
const useGetRoomType = () => useQuery(GET_ROOMTYPE);
const useGetRoomTypes = () => useQuery(GET_ROOMTYPES);
// Status Room
const useStatusRooms = () => useQuery(GET_STATUSROOM);
// Users
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
// User
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
  useGetFloor,
  useGetFloors,
  useCreateFloor,
  useUpdateFloor,
  useDeleteFloor,
  useGetRoomType,
  useGetRoomTypes,
  useCreateRoomType,
  useUpdateRoomType,
  useDeleteRoomType,
  userGetUsersRoleEmployes,
  useLazyGetUser,
  useGetUser,
  useSignUp,
  useSignIn,
  useSignOut,
  useStatusRooms,
};
