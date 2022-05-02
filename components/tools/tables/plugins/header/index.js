import React from 'react';
import GlobalFilter from './GlobalFilter';
import { useAppSelector } from '../../../../../redux/hooks';

const Header = ({
  name,
  preGlobalFilteredRows,
  setGlobalFilter,
  headerGroups,
  state
}) => {
  useAppSelector((e) => e.auth);
  return (
    <div className="flex justify-between mb-4">
      <GlobalFilter
        name={name}
        preGlobalFilteredRows={preGlobalFilteredRows}
        globalFilter={state.globalFilter}
        setGlobalFilter={setGlobalFilter}
      />
      <div className="flex mr-3 items-center cursor-pointer">
        {headerGroups.map((headerGroup) => headerGroup.headers.map((column) => (column.Filter ? (
              <div className="mt-2 ml-3 sm:mt-0" key={column.id}>
                {column.render('Filter')}
              </div>
        ) : null)))}
      </div>
    </div>
  );
};

export default Header;
