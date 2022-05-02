// Library Tools
import {
  AvatarCell,
  userCell,
  FirstCell,
  LastCell,
  AdressCell
} from './lib/cell';

const usersManagement = [
  {
    Header: 'Profile',
    Cell: AvatarCell
  },
  {
    Header: 'Name',
    accessor: 'email',
    Cell: userCell
  },
  {
    Header: 'Firstname',
    accessor: 'firstname',
    Cell: FirstCell
  },
  {
    Header: 'Lastname',
    accessor: 'lastname',
    Cell: LastCell
  },
  {
    Header: 'Adress',
    accessor: 'location.state',
    Cell: AdressCell
  }
];
export default usersManagement;
