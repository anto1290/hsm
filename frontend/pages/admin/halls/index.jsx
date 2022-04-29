import {
    LayoutAdmin,
    Table,
    errorMessage,
    StatusPill,
    Button,
  } from "@/components";
  import router from "next/router";
  import { useMemo, useState } from "react";
  
  import * as Bs from "react-icons/bs";
  import { useGetRooms ,useDeleteRoom} from "@/apollo/action";
  const Halls = () => {
    const {loading ,error,data:getRooms} = useGetRooms();
    const [deleteRoom,{loading:loadingDelete,error:errorDelete}] = useDeleteRoom();
    const dataRooms =  (getRooms && getRooms.rooms.filter((rooms) => rooms.typeRoom === "Halls") )|| [];
    const columns = useMemo(
      () => [
        {
          Header: "Name",
          accessor: "name",
        },
        {
          Header: "Floor",
          accessor: "floor.name",
          Cell: ({ value,row }) => {
            return (
              <div className="flex items-center">
                <div className="flex-shrink-0 h-10 w-10">
                <Bs.BsBuilding className="text-gray-400 text-3xl" />
                </div>
                <div className="ml-1">
                  <div className="text-sm font-medium text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500">{row.original.floor.numberFloor + " floor"}</div>
                </div>
              </div>
            );
          }
        },
        {
          Header: "Room Type",
          accessor: "roomType.nameType",
          Cell: ({ value,row }) => {
            return (
              <div className="flex items-center">
                {/* <div className="flex-shrink-0 h-10 w-10">
                <Bs.BsBuilding className="text-gray-400 text-3xl" />
                </div> */}
                <div className="ml-1">
                  <div className="text-sm font-medium text-gray-900">{value}</div>
                  <div className="text-sm text-gray-500">{row.original.statusRoom.nameStatus}</div>
                </div>
              </div>
            );
          }
        },
        {
          Header: "Status",
          accessor: "status",
          Cell: StatusPill,
        },
        {
          Header: "Action",
          Cell: ({ row }) => (
            <div>
              <button
                type="button"
                className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
                onClick={() => router.push(`./rooms/${row.original._id}/edit`)}
              >
                <Bs.BsWrench className="inline-block mr-1 text-base" />
                Edit
              </button>{" "}
              <button
                type="button"
                className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
                onClick={() => deleteRoom({variables: { id: row.original._id }})}
              >
                <Bs.BsTrash className="inline-block mr-1 text-base" />
                Delete
              </button>
            </div>
          ),
        },
      ],
      []
    );
    return (
      <LayoutAdmin>
        <section className="container mt-12">
          <div className="flex justify-between p-2">
            <h1 className="text-2xl font-bold block">Halls</h1>
            <h1 className="text-sm font-bold mt-8 pr-2">
              <span className="text-gray-400">admin {"> "}</span>
              Halls
            </h1>
          </div>
          <div className="float-right mr-7">
            <Button
              className={"bg-blue-600 hover:bg-blue-400 text-white"}
              onClick={() => router.push('./halls/new')}
            >
              <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
              Add Hall
            </Button>
          </div>
          <div className="w-[80vw] p-5">
          {loading && (
              <div className="flex justify-center items-center py-10">
                <div
                  className="spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0"
                  role="status"
                >
                  <span className="visually-hidden">Loading...</span>
                </div>
              </div>
            )}
            {error && (
              <div
                className="mt-28 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 "
                role="alert"
              >
                {errorMessage(error)}
              </div>
            )}
            {!loading && !error && (
            <Table columns={columns} data={dataRooms} />
            )}
          </div>
        </section>
      </LayoutAdmin>
    );
  };
  
  export default Halls;
  