import { useMemo, useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_USERROLE } from "@/apollo/queries";
import { useRouter } from "next/router";
import { LayoutAdmin, Button, Table } from "@/components";
import * as Bs from "react-icons/bs";
const Employes = () => {
  const router = useRouter();
  const [employes, setEmploye] = useState(null);
  const { loading, error, data } = useQuery(GET_USERROLE, {
    variables: { role: "employes" },
  });
  if (data && !employes) {
    setEmploye(data.userRole);
  }
  const Employes = useMemo(() => {
    if (!employes) {
      return [];
    } else {
      employes;
    }
  }, []);
  const columns = useMemo(
    () => [
      {
        Header: "Name",
        accessor: "firstName",
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
        Header: "Status",
        accessor: "active",
      },
      {
        Header: "action",

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
