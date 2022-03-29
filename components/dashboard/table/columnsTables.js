//Library Tools
import { countryCell, countCell } from "./lib/cell";

export const countryManagement = [
  {
    Header: "Country",
    accessor: "country",
    Cell: countryCell,
  },
  {
    Header: "Count",
    Cell: countCell,
  },
];
