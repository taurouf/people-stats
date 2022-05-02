// Library Tools
import { countryCell, countCell } from './lib/cell';

const countryManagement = [
  {
    Header: 'Country',
    accessor: 'country',
    Cell: countryCell
  },
  {
    Header: 'Count',
    Cell: countCell
  }
];
export default countryManagement;
