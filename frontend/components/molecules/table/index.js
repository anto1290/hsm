import { useState } from "react";
import {
  useTable,
  useFilters,
  useGlobalFilter,
  useAsyncDebounce,
  useSortBy,
  usePagination,
} from "react-table"; // new
import { Button, PageButton } from "../button";
import * as BS from "react-icons/bs";
import { SortDownIcon, SortIcon, SortUpIcon } from "../../Icons";

// Define a default UI for filtering
function GlobalFilter({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
}) {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);

  return (
    <label className="flex gap-x-2 items-baseline">
      <span className="text-gray-700">Search: </span>
      <input
        type="text"
        className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} records...`}
      />
    </label>
  );
}

// This is a custom filter UI for selecting
// a unique option from a list

function Table({ columns, data }) {
  // Use the state and functions returned from useTable to build your UI
  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,

    page, // Instead of using 'rows', we'll use page,
    // which has only the rows for the active page

    // The rest of these things are super handy, too ;)
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters, // useFilters!
    useGlobalFilter,
    useSortBy,
    usePagination // new
  );

  // Render the UI for your table
  return (
    <>
      <div className="sm:flex sm:gap-x-2">
        <GlobalFilter
          preGlobalFilteredRows={preGlobalFilteredRows}
          globalFilter={state.globalFilter}
          setGlobalFilter={setGlobalFilter}
        />
        {headerGroups.map((headerGroup) =>
          headerGroup.headers.map((column) =>
            column.Filter ? (
              <div className="mt-2 sm:mt-0" key={column.id}>
                {column.render("Filter")}
              </div>
            ) : null
          )
        )}
      </div>
      {/* Table */}
      <div className="mt-2 flex flex-col">
        <div className="-my-2 overflow-x-auto -mx-4 sm:-mx-6 lg-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table
                {...getTableProps()}
                className="min-w-full divide-y divide-gray-200"
              >
                <thead className="bg-gray-50">
                  {headerGroups.map((headerGroup) => (
                    <tr {...headerGroup.getHeaderGroupProps()}>
                      {headerGroup.headers.map((column) => (
                        // Add the sorting props to control sorting. For this example
                        // we can add them into the header props
                        <th
                          scope="col"
                          className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            column.getSortByToggleProps()
                          )}
                        >
                          {column.render("Header")}
                          {/* Add a sort direction indicator */}
                          <span className="inline-block">
                            {column.isSorted ? (
                              column.isSortedDesc ? (
                                <SortDownIcon className="w-4 h-4 text-gray-400" />
                              ) : (
                                <SortUpIcon className="w-4 h-4 text-gray-400" />
                              )
                            ) : (
                              <SortIcon className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100" />
                            )}
                          </span>
                        </th>
                      ))}
                    </tr>
                  ))}
                </thead>
                <tbody
                  className="bg-white divide-y divide-gray-200"
                  {...getTableBodyProps()}
                >
                  {page.map((row, i) => {
                    // new
                    prepareRow(row);
                    return (
                      <tr {...row.getRowProps()}>
                        {row.cells.map((cell) => {
                          return (
                            <td
                              className="px-6 py-4 whitespace-nowrap"
                              {...cell.getCellProps()}
                            >
                              {cell.render("Cell")}
                            </td>
                          );
                        })}
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      {/* Pagination */}
      <div className="py-3 flex items-center justify-between">
        <div className="flex-1 flex justify-between sm:hidden">
          <Button
            className={
              "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-medium"
            }
            onClick={() => previousPage()}
            disabled={!canPreviousPage}
          >
            Previous
          </Button>
          <Button
            className={
              "border border-gray-300 text-gray-700 bg-white hover:bg-gray-50 text-sm font-medium "
            }
            onClick={() => nextPage()}
            disabled={!canNextPage}
          >
            Next
          </Button>
        </div>
        <div className="hidden sm:flex-1 sm:flex sm:items-center sm:justify-between">
          <div className="flex gap-x-2 items-baseline">
            <span className="text-sm text-gray-700">
              Page <span className="font-medium">{state.pageIndex + 1}</span> of{" "}
              <span className="font-medium">{pageOptions.length}</span>
            </span>
            <label>
              <span className="sr-only">Items Per Page</span>
              <select
                className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                value={state.pageSize}
                onChange={(e) => {
                  setPageSize(Number(e.target.value));
                }}
              >
                {[5, 10, 20].map((pageSize) => (
                  <option key={pageSize} value={pageSize}>
                    Show {pageSize}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>
        <div className="p-2">
          <nav
            className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px"
            aria-label="Pagination"
          >
            <PageButton
              className="rounded-l-md"
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">First</span>
              <BS.BsChevronDoubleLeft className="h-5 w-5" aria-hidden="true" />
            </PageButton>
            <PageButton
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
            >
              <span className="sr-only">Previous</span>
              <BS.BsChevronLeft className="h-5 w-5" aria-hidden="true" />
            </PageButton>
            <PageButton onClick={() => nextPage()} disabled={!canNextPage}>
              <span className="sr-only">Next</span>
              <BS.BsChevronRight className="h-5 w-5" aria-hidden="true" />
            </PageButton>
            <PageButton
              className="rounded-r-md"
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
            >
              <span className="sr-only">Last</span>
              <BS.BsChevronDoubleRight className="h-5 w-5" aria-hidden="true" />
            </PageButton>
          </nav>
        </div>
      </div>
    </>
  );
}

export default Table;
