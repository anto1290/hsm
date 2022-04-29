import React, { useEffect, useMemo } from 'react'
import { useRouter } from 'next/router';
import { LayoutAdmin, Table, Button, errorMessage, Rupiah } from "@/components";
import * as Bs from "react-icons/bs";
import { useGetServices, useDeleteService } from '@/apollo/action';
const PaidServices = () => {
    const router = useRouter();
    const { loading, error, data: getServices } = useGetServices();

    const [deleteService] = useDeleteService();

    const columns = useMemo(() => [
        {
            Header: "Name Service",
            accessor: "name"
        },
        {
            Header: "Price",
            accessor: "price",
            Cell: Rupiah
        },
        {
            Header: "Type",
            accessor: "typePrice",
        },
        {
            Header: "Action",
            Cell: ({ row }) => (
                <div>
                    <button
                        type="button"
                        className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
                        onClick={() => router.push(`./paidServices/${row.original._id}/edit`)}
                    >
                        <Bs.BsWrench className="inline-block mr-1 text-base" />
                        Edit
                    </button>{" "}
                    <button
                        type="button"
                        className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
                        onClick={() => deleteService({ variables: { id: row.original._id } })}
                    >
                        <Bs.BsTrash className="inline-block mr-1 text-base" />
                        Delete
                    </button>
                </div>
            ),
        },
    ], [])
    return (
        <LayoutAdmin>
            <section className="container mt-12">
                <div className="flex justify-between p-2">
                    <h1 className="text-2xl font-bold block">Paid Services</h1>
                    <h1 className="text-sm font-bold mt-8 pr-2">
                        <span className="text-gray-400">admin {"> "}</span>
                        Paid Services
                    </h1>
                </div>
                <div className="float-right mr-7">
                    <Button
                        className={"bg-blue-600 hover:bg-blue-400 text-white"}
                        onClick={() => router.push('./paidServices/new')}
                    >
                        <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
                        Add Services
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
                        <Table columns={columns} data={(getServices && getServices.services)} />
                    )}
                </div>
            </section>
        </LayoutAdmin>
    )
}

export default PaidServices