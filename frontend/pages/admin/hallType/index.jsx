import { LayoutAdmin, Table, Button, errorMessage, Rupiah } from "@/components";
import { useMemo, useState } from "react";
import { useRouter } from "next/router";
import * as Bs from "react-icons/bs";
import { useGetRoomTypes ,useDeleteRoomType} from "@/apollo/action";

const HallsType = () => {
  const router = useRouter();
  const { loading, error, data } = useGetRoomTypes();
  const [deleteRoomType, { loading: loadingDelete, error: errorDelete }] = useDeleteRoomType();
  const dataRoomType =
    (data &&
      data.roomTypes.filter((roomTypes) => roomTypes.typeRoom === "Halls")) ||
    [];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "nameType",
        imgAccessor: "imageType",
        codeAccessor: "codeType",
        Cell: ({ value, column, row }) => {
          const imgUrl = row.original[column.imgAccessor]
            ? row.original[column.imgAccessor]
            : "/img/avatar/default.png";
          return (
            <div className="flex items-center">
              <div className="flex-shrink-0 h-10 w-10">
                <img
                  className="h-10 w-10 rounded-full"
                  src={imgUrl}
                  alt={`hotel-${value}`}
                />
              </div>
              <div className="ml-4">
                <div className="text-sm font-medium text-gray-900">{value}</div>
                <div className="text-sm text-gray-500">
                  {row.original[column.codeAccessor]}
                </div>
              </div>
            </div>
          );
        },
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Ocupancy",
        accessor: "maxOccupancy",
      },
      {
        Header: "Base Price",
        accessor: "basePrice",
        Cell: Rupiah,
      },
      {
        Header: "Action",
        Cell: ({ row }) => (
          <div>
            <button
              type="button"
              className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
              onClick={() => router.push(`./hallType/${row.original._id}/edit`)}
            >
              <Bs.BsWrench className="inline-block mr-1 text-base" />
              Edit
            </button>{" "}
            <button
              type="button"
              className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
              onClick={() => deleteRoomType({ variables: { id: row.original._id } })}
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
          <h1 className="text-2xl font-bold block">Hall Type</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Hall Type
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button
            className={"bg-blue-600 hover:bg-blue-400 text-white"}
            onClick={() => router.push("./hallType/newHallType")}
          >
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Hall Type
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
            <Table columns={columns} data={dataRoomType} />
          )}
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default HallsType;
