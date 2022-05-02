/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
import {
  useEffect, useState, useMemo, React
} from 'react';
import lodash from 'lodash';

// All data
import DB_USER from '../../database/dbusers';
import Donnuts from '../tools/donnuts';

// Tools tables
import Tables from '../tools/tables';
import countryManagement from './table/columnsTables';
import optionsManagement from './table/optionsTables';

export default function Dashboard() {
  const columns = useMemo(() => countryManagement, []);
  // [get, post] = useState(type(number, string, array))
  const [users, setUsers] = useState([]);

  const loadingUsers = () => {
    setUsers(DB_USER);
  };

  useEffect(() => {
    loadingUsers();
  }, []);

  // Gender Donnuts
  const labelGender = [];
  users.map((user) => {
    if (!labelGender.includes(user.gender)) {
      labelGender.push(user.gender);
    }
  });
  const { male, female } = lodash.countBy(DB_USER, 'gender');

  // Country Donnuts
  const labelCountry = [];
  users.map((user) => {
    if (!labelCountry.includes(user.location.country)) {
      labelCountry.push(user.location.country);
    }
  });
  const country = Object.entries(lodash.countBy(DB_USER, 'location.country')).map(
    ([key, value]) => value
  );

  // Data  Donnuts
  const sendData = (label, data) => ({
    labels: label,
    datasets: [
      {
        data,
        backgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#32CD32',
          '#4B0082',
          '#9932CC',
          '#87CEEB',
          '#DEB887',
          '#FFD700',
          '#FFA500',
          '#FF4500',
          '#DA70D6',
          '#FF69B4',
          '#FF1493',
          '#C71585',
          '#DB7093',
          '#FF00FF'
        ],
        hoverBackgroundColor: [
          '#FF6384',
          '#36A2EB',
          '#FFCE56',
          '#32CD32',
          '#4B0082',
          '#9932CC',
          '#87CEEB',
          '#DEB887',
          '#FFD700',
          '#FFA500',
          '#FF4500',
          '#DA70D6',
          '#FF69B4',
          '#FF1493',
          '#C71585',
          '#DB7093',
          '#FF00FF'
        ]
      }
    ]
  });

  const topCountry = [];
  Object.entries(lodash.countBy(DB_USER, 'location.country')).map(
    ([key, value]) => topCountry.push({ country: key, count: value })
  );
  console.log(topCountry);
  console.log(columns);
  console.log(optionsManagement);

  return (
    <>
      <div className="flex space-x-4">
        <div className="flex items-center justify-around p-6 bg-white w-64 rounded-xl space-x-2 mt-10 shadow-lg">
          <div>
            <span className="text-sm font-semibold text-gray-400">
              Users sign up
            </span>
            <h1 className="text-2xl font-bold">{users.length}</h1>
          </div>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-8 w-8 text-indigo-600"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 11l7-7 7 7M5 19l7-7 7 7"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="flex flex-row mt-5">
        <Donnuts tilte="Genres" data={sendData(labelGender, [female, male])} />
        <Donnuts tilte="Pays" data={sendData(labelCountry, country)} />
      </div>
      <div className="mt-10">
        <Tables
          columns={columns}
          fetchData={topCountry.sort((a, b) => b.count - a.count).slice(0, 15)}
          options={optionsManagement}
        />
      </div>
    </>
  );
}
