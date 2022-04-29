import { LayoutAdmin, Button, Table, Rupiah } from '@/components'
import * as Bs from "react-icons/bs";
import { useState, Fragment, useMemo } from 'react';
import { Tab, Dialog, Transition } from '@headlessui/react'
import { classNames } from '@/components/molecules/utils';
import { useRouter } from 'next/router';
import { useGetPrices, useDeletePrice } from '@/apollo/action';
const PriceManager = () => {
  const router = useRouter();
  let [isOpen, setIsOpen] = useState(false)
  const [deletePrice] = useDeletePrice()
  const { data: price } = useGetPrices()
  const regularPrice = price && price.prices.filter((item) => item.priceType === 'Regular') || [];
  const specialPrice = price && price.prices.filter((item) => item.priceType === 'Special') || [];
  const regularColumns = useMemo(() => [
    {
      Header: 'Room Type',
      accessor: 'roomType.nameType',
    },
    {
      Header: 'Monday',
      accessor: 'mon',
      Cell: Rupiah
    },
    {
      Header: 'Tuesday',
      accessor: 'tue',
      Cell: Rupiah
    },
    {
      Header: 'Wednesday',
      accessor: 'wed',
      Cell: Rupiah
    },
    {
      Header: 'Thursday',
      accessor: 'thu',
      Cell: Rupiah
    },
    {
      Header: 'Friday',
      accessor: 'fri',
      Cell: Rupiah
    },
    {
      Header: 'Saturday',
      accessor: 'sat',
      Cell: Rupiah
    },
    {
      Header: 'Sunday',
      accessor: 'sun',
      Cell: Rupiah
    },
    {
      Header: 'Action',
      Cell: ({ row }) => (
        <div>
          <button
            type="button"
            className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
            onClick={() => router.push(`./priceManager/${row.original._id}/editRegular`)}
          >
            <Bs.BsWrench className="inline-block mr-1 text-base" />
            Edit
          </button>{" "}
          <button
            type="button"
            className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
            onClick={() => deletePrice({ variables: { id: row.original._id } })}
          >
            <Bs.BsTrash className="inline-block mr-1 text-base" />
            Delete
          </button>
        </div>
      ),
    }
  ], []);
  const specialColumns = useMemo(() => [
    {
      Header: 'Room Type',
      accessor: 'roomType.nameType',
    },
    {
      Header: 'Title Special',
      accessor: 'special.title',
    },
    {
      Header: 'Date Event',
      accessor: 'special.startDate',
      Cell: ({ value, row, columns }) => {
        const startDate = new Date(value).toLocaleString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"

        });
        const endDate = new Date(row.original.special.endDate).toLocaleString("id-ID", {
          day: "2-digit",
          month: "2-digit",
          year: "numeric"

        });
        return (
          <div>
            <span className='text-sm'>{`${startDate} - ${endDate}`}</span>
          </div>
        )
      }
    },
    {
      Header: 'Action',
      Cell: ({ row }) => (
        <div>
          <button
            type="button"
            className="px-2 py-2 outline-none bg-yellow-500 text-white hover:bg-yellow-400 rounded-sm text-sm"
            onClick={() => router.push(`./priceManager/${row.original._id}/editSpecial`)}
          >
            <Bs.BsWrench className="inline-block mr-1 text-base" />
            Edit
          </button>{" "}
          <button
            type="button"
            className="px-2 py-2 outline-none bg-red-600 text-white hover:bg-red-500 rounded-sm text-sm"
            onClick={() => deletePrice({ variables: { id: row.original._id } })}
          >
            <Bs.BsTrash className="inline-block mr-1 text-base" />
            Delete
          </button>
        </div>

      ),
    }
  ], []);

  return (
    <LayoutAdmin>
      <section className="container mt-12">
        <div className="flex justify-between p-2">
          <h1 className="text-2xl font-bold block">Price Manager</h1>
          <h1 className="text-sm font-bold mt-8 pr-2">
            <span className="text-gray-400">admin {"> "}</span>
            Price Manager
          </h1>
        </div>
        <div className="float-right mr-7">
          <Button
            className={"bg-blue-600 hover:bg-blue-400 text-white"}
            onClick={() => setIsOpen(true)}
          >
            <Bs.BsFileEarmarkPlus className="text-white mr-1 text-lg" />
            Add Price
          </Button>
        </div>
        <div className="w-[80vw] p-5 mt-6">
          {/* {loading && (
            <div className="flex justify-center items-center py-10">
              <div
                className="spinner-grow inline-block w-10 h-10 bg-current rounded-full opacity-0"
                role="status"
              >
                <span className="visually-hidden">Loading...</span>
              </div>
            </div>
          )} */}
          <Tab.Group>
            <Tab.List className="flex p-1 space-x-1 bg-blue-900/50 rounded-xl w-1/2">
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-1/4 py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-cyan-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Regular
              </Tab>
              <Tab
                className={({ selected }) =>
                  classNames(
                    'w-1/4 py-2.5 text-sm leading-5 font-medium text-blue-700 rounded-lg',
                    'focus:outline-none focus:ring-2 ring-offset-2 ring-offset-cyan-400 ring-white ring-opacity-60',
                    selected
                      ? 'bg-white shadow'
                      : 'text-blue-100 hover:bg-white/[0.12] hover:text-white'
                  )
                }
              >
                Specials
              </Tab>
            </Tab.List>
            {/* Content Tab Navigation */}
            <Tab.Panels className="mt-2">
              <Tab.Panel className={classNames(
                'bg-white rounded-xl p-3',
                'focus:outline-none '
              )}
              >
                <Table columns={regularColumns} data={regularPrice} />
              </Tab.Panel>
              <Tab.Panel className={classNames(
                'bg-white rounded-md p-3',
                'focus:outline-none '
              )}
              >
                <Table columns={specialColumns} data={specialPrice} />
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </section>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={() => setIsOpen(false)}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents. */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                >
                  Add Price
                </Dialog.Title>
                <div className="mt-2">
                  <div className="grid grid-cols-2 gap-6">
                    <Button onClick={() => router.push('./priceManager/newRegular')} className="inline-flex justify-center bg-yellow-400 hover:bg-yellow-200 text-gray-800 rounded-md font-bold">Regular</Button>
                    <Button onClick={() => router.push('./priceManager/newSpecial')} className="inline-flex justify-center bg-green-600 hover:bg-green-200 hover:text-gray-800 font-bold rounded-md text-white ">Special</Button>

                  </div>
                </div>

                <div className="mt-4 flex justify-items-center justify-center">
                  <button
                    type="button"
                    className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                    onClick={() => setIsOpen(false)}
                  >
                    Close
                  </button>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </LayoutAdmin>
  )
}

export default PriceManager