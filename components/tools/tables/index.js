//imports Packages
import React, { useState, useEffect, useRef, Fragment } from "react";
import { useAppSelector } from "../../../redux/hooks";
import { DateTime } from "luxon";
import { useRouter } from "next/router";
import {
  useTable,
  useRowSelect,
  useFilters,
  useGlobalFilter,
  useSortBy,
  usePagination,
} from "react-table";

//imports Plugins Components react-table
import Header from "./plugins/header";
import Pagination from "./plugins/pagination";

//imports Icons (SVG)
import { SortIcon, SortUpIcon, SortDownIcon } from "./plugins/shared/Icons";

const Tables = ({ fetchData, columns, options }) => {
  const router = useRouter();
  const [expanded, setExpanded] = useState(false);
  const [id, setId] = useState();
  const expanderBody = useRef();
  const [data, setData] = useState([]);
  const [render, setRender] = useState(0);

  const [newLeftButton, setNewLeftButton] = useState(false);
  const [newRightButton, setNewRightButton] = useState(false);

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    prepareRow,
    page,
    canPreviousPage,
    canNextPage,
    pageOptions,
    pageCount,
    gotoPage,
    nextPage,
    previousPage,
    setPageSize,

    state,
    rows,
    preGlobalFilteredRows,
    setGlobalFilter,
  } = useTable(
    {
      columns,
      data,
    },
    useFilters,
    useGlobalFilter,
    useSortBy,
    usePagination,
    useRowSelect
  );
  const pageRows = rows.slice(0, page.pageSize);

  useEffect(() => {
    setPageSize(50);
    loadData();
  }, [render]);

  const loadData = async () => {
    const getNewTable = fetchData;
    setData(getNewTable);
  };

  const toggleExpander = (e, uid) => {
    if (!expanded) {
      setExpanded(true);
    } else if (expanderBody && id !== uid) {
      setExpanded(true);
    } else {
      setExpanded(false);
    }
  };

  return (
    <div>
      {options.header.button.activated ? (
        <Header
          name={options.header.searchName}
          activeLeftButton={options?.header?.button?.left?.activated}
          titleLeftButton={options?.header?.button?.left?.title}
          newLeftButton={newLeftButton}
          setNewLeftButton={setNewLeftButton}
          activeRightButton={options?.header?.button?.right?.activated}
          titleRightButton={options?.header?.button?.right?.title}
          newRightButton={newRightButton}
          setNewRightButton={setNewRightButton}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          headerGroups={headerGroups}
          state={state}
        />
      ) : (
        <Header
          name={options.header.searchName}
          activeLeftButton={options?.header?.button?.left?.activated}
          titleLeftButton={options?.header?.button?.left?.title}
          newLeftButton={newLeftButton}
          setNewLeftButton={setNewLeftButton}
          activeRightButton={options?.header?.button?.right?.activated}
          titleRightButton={options?.header?.button?.right?.title}
          newRightButton={newRightButton}
          setNewRightButton={setNewRightButton}
          preGlobalFilteredRows={preGlobalFilteredRows}
          setGlobalFilter={setGlobalFilter}
          headerGroups={headerGroups}
          state={state}
        />
      )}

      <div className="overflow-y-auto sm:-mx-6 lg:-mx-8 mt-5 mb-5">
        <div className="align-middle inline-block min-w-full sm:px-6 lg:px-8">
          <div className="border border-gray-200 rounded-md shadow ">
            <table
              className="w-full divide-y divide-gray-200"
              {...getTableProps()}
            >
              <thead>
                {headerGroups.map((headerGroup, index) => (
                  <tr
                    key={index}
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                    {...headerGroup.getHeaderGroupProps()}
                  >
                    {headerGroup.headers.map((column, key) => {
                      return (
                        <th
                          key={key}
                          scope="col"
                          className="group px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                          {...column.getHeaderProps(
                            options.sort.activated &&
                              options.sort.names.map((e) => {
                                return column.getSortByToggleProps();
                              })
                          )}
                        >
                          <div className="flex items-center justify-between">
                            {column.render("Header")}
                            <span>
                              {options.sort.activated &&
                                options.sort.names.map((e, i) => {
                                  return column
                                    .render("Header")
                                    .includes(
                                      e.toUpperCase() ===
                                        column.render("Header")
                                    ) ? null : column.isSorted ? (
                                    column.isSortedDesc ? (
                                      <SortDownIcon
                                        key={i}
                                        className="w-4 h-4 text-gray-400"
                                      />
                                    ) : (
                                      <SortUpIcon
                                        key={i}
                                        className="w-4 h-4 text-gray-400"
                                      />
                                    )
                                  ) : (
                                    <SortIcon
                                      key={i}
                                      className="w-4 h-4 text-gray-400 opacity-0 group-hover:opacity-100"
                                    />
                                  );
                                })}
                            </span>
                          </div>
                        </th>
                      );
                    })}
                  </tr>
                ))}
              </thead>
              <tbody
                {...getTableBodyProps()}
                className="bg-white divide-y divide-gray-200"
              >
                {page.map((row, k) => {
                  prepareRow(row);
                  return (
                    <Fragment key={k}>
                      <tr
                        {...row.getRowProps()}
                        className={`hover:${
                          options?.link?.color
                            ? options?.link?.color
                            : "bg-gray-100"
                        } cursor-pointer`}
                        onClick={(e) => {
                          if (options.link.pathName) {
                            const res = options?.link?.inFieldName
                              ? row.original[options.link.fieldName][
                                  options?.link?.inFieldName
                                ]
                              : row.original.login.uuid;

                            router.push(options.link.pathName + "/" + res);
                          } else if (options.section === "users") {
                            e.stopPropagation();
                            toggleExpander(e, row.original.uuid);
                            setId(row.original.uuid);
                          } else null;
                        }}
                      >
                        {row.cells.map((cell, secondKey) => {
                          return (
                            <td
                              key={secondKey}
                              {...cell.getCellProps()}
                              className="px-6 py-4 relative"
                            >
                              {cell.column.Cell.name === "defaultRenderer" ? (
                                <div className="text-sm text-gray-500">
                                  {cell.render("Cell")}
                                </div>
                              ) : (
                                cell.render("Cell")
                              )}
                            </td>
                          );
                        })}
                      </tr>
                    </Fragment>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      <Pagination
        state={state}
        gotoPage={gotoPage}
        pageCount={pageCount}
        pageOptions={pageOptions}
        setPageSize={setPageSize}
        previousPage={previousPage}
        nextPage={nextPage}
        canPreviousPage={canPreviousPage}
        canNextPage={canNextPage}
      />
    </div>
  );
};

export default Tables;
