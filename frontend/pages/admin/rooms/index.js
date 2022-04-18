import {
  LayoutAdmin,
  Table,
  SelectColumnFilter,
  StatusPill,
  AvatarCell,
  Button,
  Modal,
} from "../../../components";
import { useMemo, useState } from "react";
const getData = () => [
  {
    id: 1,
    name: "01",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 2,
    name: "02",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 3,
    name: "03",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 4,
    name: "04",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 5,
    name: "05",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 6,
    name: "06",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 7,
    name: "07",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 8,
    name: "08",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 9,
    name: "09",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
  {
    id: 10,
    name: "10",
    floor: "1",
    roomType: "1",
    status: "active",
    created_at: "2020-01-01",
    updated_at: "2020-01-01",
  },
];
import * as Bs from "react-icons/bs";
const Rooms = () => {
  const data = useMemo(() => getData(), []);
  const [openModal, setOpenModal] = useState(false);
  const closeModal = () => setOpenModal(false);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "name",
      },
      {
        Header: "Floor",
        accessor: "floor",
      },
      {
        Header: "Room Type",
        accessor: "roomType",
      },
      {
        Header: "Status",
        accessor: "status",
        Cell: StatusPill,
      },
    ],
    []
  );
  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Room Type</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Room Type
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button
            className={"bg-blue-600 hover:bg-blue-400 text-white"}
            onClick={() => setOpenModal(true)}
          >
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Type
          </Button>
        </div>
        <div className="w-[80vw] p-5">
          <Table columns={columns} data={data} />
        </div>
      </section>
    </LayoutAdmin>
  );
};

export default Rooms;
