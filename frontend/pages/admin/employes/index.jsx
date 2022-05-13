import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERROLE } from "@/apollo/queries";
import { useRouter } from "next/router";
import { LayoutAdmin, Button, Table } from "@/components";
import * as Bs from "react-icons/bs";
const Employes = () => {
  const router = useRouter();
  const { loading, error, data } = useQuery(GET_USERROLE, {
    variables: { role: "employes" },
  });

  const Employes = (data && data.userRole) || [];
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "firstName",
        Cell: ({ value, row }) => {
          return <p className="text-sm">{value + ' ' + row.original.lastName}</p>;
        }
      },
      {
        Header: "Departement",
        accessor: "departement.nameDepartement",
      },
      {
        Header: "Designation",
        accessor: "designation.nameDesignation",
      },
      {
        Header: "BOD",
        accessor: "DOB",
        Cell: ({ value }) => {
          const newDate = new Date(value).toLocaleString("id-ID", {
            day: "2-digit",
            month: "2-digit",
            year: "numeric"

          });
          return <p className="text-sm">{newDate}</p>;
        }
      },
      {
        Header: "Status",
        accessor: "active",
        Cell: ({ value }) => {
          const status = value;
          return (
            <span
              className={`${status
                ? "bg-green-100 text-green-700"
                : "bg-yellow-100 text-yellow-700"
                } px-3 py-1 uppercase leading-wide font-bold text-xs rounded-full shadow-sm`}
            >
              {status ? "Active" : "Inactive"}
            </span>
          );
        },
      },
      {
        Header: "action",
        Cell: ({ row }) => (
          <div>
            <button
              type="button"
              className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
              onClick={() => router.push(`./employes/${row.original._id}/edit`)}
            >
              <Bs.BsWrench className="inline-block mr-1 text-base" />
              Edit
            </button>{" "}
            <button
              type="button"
              className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"

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
          <h1 className="text-2xl font-bold block">Employes</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Employes
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button className={"bg-blue-600 hover:bg-blue-400 text-white"} onClick={() => router.push('./employes/new')}>
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Employes
          </Button>
        </div>
        <div className="w-[81.5vw] p-5">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div
                className="spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          ) : (
            <Table columns={columns} data={Employes} />
          )}
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default Employes;
