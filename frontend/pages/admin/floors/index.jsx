import { useMemo, useState, useEffect } from "react";
import {
  useCreateFloor,
  useGetFloor,
  useGetFloors,
  useUpdateFloor,
  useDeleteFloor,
} from "@/apollo/action";
import {
  LayoutAdmin,
  FormFloor,
  Button,
  errorMessage,
  Modal,
  Table,
} from "@/components";
import * as Bs from "react-icons/bs";
const Floors = () => {
  const [modalNew, setModalNew] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [ID, setID] = useState("");
  const { loading, error, data: floors } = useGetFloors();
  const [createFloor, { error: errorCreate }] = useCreateFloor();
  const [FloorGET, { error: errorGetFloor, data: getfloor }] = useGetFloor();
  const [updateFloor, { error: errorUpdate }] = useUpdateFloor();
  const [deleteFloor] = useDeleteFloor();
  const closeModalNew = () => setModalNew(false);
  const closeModalEdit = () => {
    setID("");
    setModalEdit(false);
  };
  const dataFloors = (floors && floors.floors) || [];
  useEffect(() => {
    if (ID !== "") {
      if (ID) {
        FloorGET({ variables: { id: ID } });
      }
    }
  }, [getfloor, ID]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Floors",
        accessor: "numberFloor",
      },
      {
        Header: "Description",
        accessor: "description",
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
              onClick={() =>
                deleteFloor({ variables: { id: row.original._id } })
              }
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

  const handleEditFloor = async (inputfloor) => {
    const input = {
      name: inputfloor.name,
      numberFloor: parseInt(inputfloor.numberFloor, 10),
      description: inputfloor.description,
    };

    await updateFloor({ variables: { id: inputfloor.id, input } });
    closeModalEdit();
  };
  const handleNewFloor = async (inputfloor) => {
    const input = {
      name: inputfloor.name,
      numberFloor: parseInt(inputfloor.numberFloor, 10),
      description: inputfloor.description,
    };
    await createFloor({ variables: input });
    closeModalNew();
  };
  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Floors</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Floors
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button
            className={"bg-blue-600 hover:bg-blue-400 text-white"}
            onClick={() => setModalNew(true)}
          >
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Floor
          </Button>
        </div>
        <div className="w-[81.5vw] p-5">
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
          {!loading && !error && <Table columns={columns} data={dataFloors} />}
          {errorCreate && (
            <div
              className="mt-28 bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 "
              role="alert"
            >
              {errorMessage(errorCreate)}
            </div>
          )}
        </div>
      </section>
      <Modal openModal={modalNew} closeModal={closeModalNew}>
        <div className="flex justify-between items-center text-xl rounded-t-md px-2 py-2">
          <h3>Add Floor</h3>
          <button onClick={closeModalNew}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormFloor onSubmit={handleNewFloor} closeModal={closeModalNew} />
        </div>
      </Modal>
      <Modal openModal={modalEdit} closeModal={closeModalEdit}>
        <div className="flex justify-between items-center text-xl rounded-t-md px-2 py-2">
          <h3>Edit Floor</h3>
          <button onClick={closeModalEdit}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormFloor
            onSubmit={handleEditFloor}
            closeModal={closeModalEdit}
            initialData={(getfloor && getfloor.floor) || []}
          />
        </div>
      </Modal>
    </LayoutAdmin>
  );
};

export default Floors;
