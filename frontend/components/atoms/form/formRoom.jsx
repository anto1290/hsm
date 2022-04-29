import {useEffect,useState} from 'react'
import { useForm } from 'react-hook-form';
import { useGetFloors, useGetRoomTypes, useStatusRooms } from '@/apollo/action';
import { useRouter } from 'next/router';
const FormRoom = ({onSubmit,initialData,typeRoomData}) => {
  const router = useRouter();
    const { handleSubmit, register, setValue } = useForm();
    const {data:Floors} = useGetFloors();
    const {data: roomTypes} = useGetRoomTypes()
    const {data:StatusRooms} = useStatusRooms();
    const RoomTypes = roomTypes && roomTypes.roomTypes.filter(item => item.typeRoom === typeRoomData) || [];
  useEffect(()=>{
    if(initialData && initialData._id){
      setValue("id",initialData._id)
      setValue("name",initialData.name,{shouldTouch:true})
      setValue("floor",initialData.floor._id,{shouldTouch:true})
      setValue("statusRoom",initialData.statusRoom._id,{shouldTouch:true})
      setValue("status",initialData.status,{shouldTouch:true})
    }  
    if(initialData && initialData.roomType && RoomTypes){
      setValue("roomType",initialData.roomType._id,{shouldTouch:true})
    }
  },[initialData,RoomTypes])
  return (
      <div className="flex justify-center items-center">
        <div className="space-x-8 md:w-80">
          <form onSubmit={handleSubmit(onSubmit)}>
          <input type="hidden" {...register("id")} />
            <div className="grid grid-col-1 gap-6">
              <div className="blok">
                <label className="text-sm text-gray-600">
                  Room Name
                </label>
                <input type="text" className="form-input mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200
                    focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" name="name" id="nameRoom" 
                    {...register("name")}/>
              </div>
              <div className="blok">
                <label className="text-sm text-gray-600">
                  Floor
                </label>
                <select name="floor" id="floor" className="form-select mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register('floor')}>
                  <option > Select Floor For Room</option>
                  {
                    Floors && Floors.floors.map(floor => {
                      return(
                      <option key={floor._id} value={floor._id}>{floor.name + ` - ` + floor.numberFloor}</option>
                    )})
                  }
                </select>
              </div>
              <div className="blok">
                <label className="text-sm text-gray-600">
                  Room Type
                </label>
                <select name="roomType" id="roomType" className="form-select mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register('roomType')}>
                  <option > Select Room Type For Room</option>
                  {
                    RoomTypes.map(item => (
                      <option key={item._id} value={item._id}>{item.nameType + ` - ` + item.codeType}</option>
                    ))
                  }
                </select>
              </div>
              
              <div className="blok">
                <label className="text-sm text-gray-600">
                  Status Room
                </label>
                <select name="statusRoom" id="statusRoom" className="form-select mt-0  block  w-full  px-0.5 border-0 border-b-2 border-gray-200 focus:ring-0 focus:border-blue-600 focus:border-b-2 focus:outline-none" {...register('statusRoom')}>
                  <option > Select Status Type For Room</option>
                  {
                    StatusRooms && StatusRooms.statusRooms.map(item => (
                      <option key={item._id} value={item._id}>{item.nameStatus + ` - ` + item.codeName}</option>
                    ))
                  }
                </select>
              </div>
              <div className="blok">
                <label className="text-sm text-gray-600" htmlFor="status">
                  Status
                </label>
                <div className="blok">
                <input type="checkbox" className="inline" name="status" id="status" {...register('status')}/> 
                <span className="ml-2 text-base font-bold">Active</span>

                </div>
              </div>
            </div>
            <div className="blok">
            <div className="px-4 py-2 border-t border-t-gray-500 flex justify-end items-center space-x-4">
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Save
        </button>
        <button
          type="button"
          onClick={() => router.push("/admin/rooms")}
          className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
        >
          back
        </button>
      </div>
            </div>
          </form>
        </div>
      </div>
  )
}

export default FormRoom