import React, { useMemo } from "react";
import Tables from "../tools/tables";

import { DB_USER } from "../../database/dbusers";
import { usersManagement } from "./table/columnsTables";
import { optionsManagement } from "./table/optionsTables";

const Users = () => {
  const columns = useMemo(() => usersManagement, []);

  return (
    <div className="mx-auto px-4 sm:px-6 lg:px-8 pt-4">
      <div className="flex justify-between mb-4">
        <h1 className="text-2xl font-bold">List of users</h1>
      </div>
      <div className="mt-6">
        <Tables
          columns={columns}
          fetchData={DB_USER}
          options={optionsManagement}
        />
      </div>
    </div>
  );
};

export default Users;
