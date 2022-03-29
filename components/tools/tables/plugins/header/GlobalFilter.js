import { useState } from "react";
import { useAsyncDebounce } from "react-table";

export const GlobalFilter = ({
  preGlobalFilteredRows,
  globalFilter,
  setGlobalFilter,
  name,
}) => {
  const count = preGlobalFilteredRows.length;
  const [value, setValue] = useState(globalFilter);
  const onChange = useAsyncDebounce((value) => {
    setGlobalFilter(value || undefined);
  }, 200);
  return (
    <label className="flex gap-x-2 items-baseline">
      <input
        type="text"
        className="rounded-md shadow-sm border border-1 p-1 border-gray"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={`${count} ${name}...`}
      />
    </label>
  );
};
