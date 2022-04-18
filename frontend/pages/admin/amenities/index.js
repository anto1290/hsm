import { useMemo, useState, useEffect } from "react";
import {
  useCreateAmenitie,
  useDeleteAmenitie,
  useGetAmenitie,
  useGetAmenities,
  useUpdateAmenitie,
} from "../../../apollo/action";
import {
  Button,
  errorMessage,
  FormAmenitie,
  LayoutAdmin,
  Modal,
  Table,
} from "../../../components";
import * as Bs from "react-icons/bs";
const Amenities = () => {
  const [modalNew, setModalNew] = useState(false);
  const [modalEdit, setModalEdit] = useState(false);
  const [ID, setID] = useState("");
  const [createAmenitie, { error: errorCreate }] = useCreateAmenitie();
  const [updateAmenitie, { error: errorUpdate }] = useUpdateAmenitie();
  const [deleteAmenitie] = useDeleteAmenitie();
  const [amenitieGet, { error: errorGet, data: getAmenitie }] =
    useGetAmenitie();
  const { loading, error, data: amenities } = useGetAmenities();
  const closeModalNew = () => setModalNew(false);
  const closeModalEdit = () => {
    setModalEdit(false);
  };
  const dataAmenities = (amenities && amenities.amenities) || [];
  useEffect(() => {
    if (ID !== "") {
      if (ID) {
        amenitieGet({ variables: { id: ID } });
      }
    }
  }, [getAmenitie, ID]);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Description",
        accessor: "description",
      },
      {
        Header: "Status",
        accessor: "active",
        Cell: ({ value }) => {
          const status = value;
          return (
            <span
              className={`${
                status
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
              onClick={() =>
                deleteAmenitie({ variables: { id: row.original._id } })
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
  const handleNewAmenitie = async (input) => {
    await createAmenitie({ variables: input });
    closeModalNew();
  };
  const handleEditAmenitie = async (inputAmenities) => {
    const input = {
      name: inputAmenities.name,
      description: inputAmenities.description,
      active: inputAmenities.active,
    };
    await updateAmenitie({ variables: { id: inputAmenities.id, input } });
    closeModalEdit();
  };

  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Amenities</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Amenities
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
          {!loading && !error && (
            <Table columns={columns} data={dataAmenities} />
          )}
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
          <h3>Add Amenitie</h3>
          <button onClick={closeModalNew}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormAmenitie
            onSubmit={handleNewAmenitie}
            closeModal={closeModalNew}
          />
        </div>
      </Modal>
      <Modal openModal={modalEdit} closeModal={closeModalEdit}>
        <div className="flex justify-between items-center text-xl rounded-t-md px-2 py-2">
          <h3>Edit Amenities</h3>
          <button onClick={closeModalEdit}>x</button>
        </div>
        <div className="max-h-96 overflow-y-scroll p-4">
          <FormAmenitie
            onSubmit={handleEditAmenitie}
            closeModal={closeModalEdit}
            initialData={(getAmenitie && getAmenitie.amenitie) || {}}
          />
        </div>
      </Modal>
    </LayoutAdmin>
  );
};

export default Amenities;
