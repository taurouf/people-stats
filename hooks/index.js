import React from 'react';
import Users from '../components/tools/icons/users';
import ChartIcon from '../components/tools/icons/chart';

const RestrictedAllRight = [
  {
    name: 'Dashboard',
    link: '/dashboard',
    icon: <ChartIcon size={21} />
  },
  {
    name: 'Users',
    link: '/users',
    icon: <Users size={21} />
  }
];
export default RestrictedAllRight;
