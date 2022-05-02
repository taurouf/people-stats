import getUnicodeFlagIcon from 'country-flag-icons/unicode';
import React from 'react';

export function countryCell({ row }) {
  return (
    <>
      <div className="flex items-center cursor-pointer text-sm font-medium">
        {getUnicodeFlagIcon(row.original.country)}
        <div className="flex items-center pl-2">{row.original.country}</div>
      </div>
    </>
  );
}

export function countCell({ row }) {
  return (
    <>
      <div className={'flex items-center cursor-pointer text-sm font-medium'}>
        <div className="flex items-center">{row.original.count}</div>
      </div>
    </>
  );
}
