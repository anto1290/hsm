import {
  LayoutAdmin,
  Table,
  errorMessage,
  StatusPill,
  Modal,
  FormDepartement,
  Button,
} from "@/components";
import router from "next/router";
import { useMemo, useState, useEffect } from "react";

import * as Bs from "react-icons/bs";
import { useGetDepartements, useGetDepartement, useCreateDepartement, useUpdateDepartement, useDeleteDepartement } from "@/apollo/action";
const Departments = () => {
  const [modalNew, setModalNew] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [ID, setID] = useState("");
  const { loading, error, data: departementsdata } = useGetDepartements();
  const [createDepartement, { error: errorCreate, data: departementsNew }] = useCreateDepartement();
  const [getDepartement, { error: errorGet, data: departementGet }] = useGetDepartement();
  const [updateDepartement, { error: errorUpdate }] = useUpdateDepartement();
  const [deleteDepartement] = useDeleteDepartement();
  const closeModalNew = () => setModalNew(false);
  const closeModalEdit = () => setModalEdit(false);
  useEffect(() => {
    if (ID !== "") {
      if (ID) {
        getDepartement({ variables: { id: ID } })
      }
    }
  }, [ID, departementGet])
  const columns = useMemo(
    () => [
      {
        Header: "Name Of Dept",
        accessor: "nameDepartement",
      },
      {
        Header: "Code Departement",
        accessor: "codeDepartement",
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
        Header: "Action",
        Cell: ({ row }) => (
          <div>
            <button
              type="button"
              className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
              onClick={() => {
                setID(row.original._id);
                setModalEdit(true);
              }}
            >
              <Bs.BsWrench className="inline-block mr-1 text-base" />
              Edit
            </button>{" "}
            <button
              type="button"
              className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
              onClick={() => deleteDepartement({ variables: { id: row.original._id } })}
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
  const handleNewDepartement = (input) => {
    createDepartement({ variables: input });
    setModalNew(false);
  }
  const handleEditDepartement = (data) => {
    const { id, nameDepartement, codeDepartement, active } = data;
    const input = {
      nameDepartement,
      codeDepartement,
      active,
    }
    updateDepartement({ variables: { id, input } });
    setModalEdit(false);
  }
  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Departments</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Departments
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button
            className={"bg-blue-600 hover:bg-blue-400 text-white"}
            onClick={() => setModalNew(true)}
          >
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Department
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
            <Table columns={columns} data={(departementsdata && departementsdata.departements) || []} />
          )}
        </div>
      </section>
      <Modal openModal={modalNew} closeModal={closeModalNew}>
        <div className="flex justify-between items-center text-xl rounded-t-md px-2 py-2">
          <h3>Add Departement</h3>
          <button onClick={closeModalNew}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormDepartement
            onSubmit={handleNewDepartement}
            closeModal={closeModalNew}
          />
        </div>
      </Modal>
      <Modal openModal={modalEdit} closeModal={closeModalEdit}>
        <div className="flex justify-between items-center text-xl rounded-t-md px-2 py-2">
          <h3>Update Departement</h3>
          <button onClick={closeModalEdit}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormDepartement
            onSubmit={handleEditDepartement}
            closeModal={closeModalEdit}
            initialdata={departementGet && departementGet.departement}
          />
        </div>
      </Modal>
    </LayoutAdmin>
  );
};

export default Departments;