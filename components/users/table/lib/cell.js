import { useState } from "react";

export function AvatarCell({ row }) {
  const [expanded, setExpanded] = useState(false);
  return (
    <>
      <div className="flex items-center">
        <div
          className="p-2 cursor-pointer"
          onClick={(e) => {
            e.stopPropagation();
            setExpanded(!expanded);
          }}
        >
          <div className="h-3 w-3 block rounded-full border" />
        </div>
        <div className="flex-shrink-0 h-10 w-10">
          <img
            className="h-10 w-10 rounded-full"
            referrerPolicy="no-referrer"
            alt=""
            src={
              row.original.picture.thumbnail ||
              "https://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm"
            }
          />
        </div>
      </div>
    </>
  );
}

export function userCell({ row }) {
  return (
    <>
      <div className="flex items-center cursor-pointer text-sm font-medium text-gray-500">
        <div className="flex items-center">
          {row.original.name.first} {row.original.name.last}
        </div>
      </div>
      <div className="flex items-center cursor-pointer text-sm font-medium text-gray-500">
        <div className="flex items-center">
          {row?.original?.email?.substr(0, 22)}
          <span>{row?.original?.email?.length >= 23 && "..."}</span>
        </div>
      </div>
    </>
  );
}

export function FirstCell({ row }) {
  return (
    <>
      <div className="flex items-center text-sm font-medium text-gray-900">
        <div className="flex items-center">{row.original.name.first}</div>
      </div>
    </>
  );
}

export function LastCell({ row }) {
  return (
    <>
      <div className="flex items-center text-sm font-medium text-gray-900">
        <div className="flex items-center">{row.original.name.last}</div>
      </div>
    </>
  );
}

export function AdressCell({ row }) {
  return (
    <>
      <div className="flex items-center text-sm font-medium text-gray-900">
        <div className="flex items-center">
          {row.original.location.street.number} {row.original.location.state}
        </div>
      </div>
    </>
  );
}
