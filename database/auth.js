import { DB_USER } from "./dbusers";

export const userLogin = (username, password) => {
  for (let i = 0; DB_USER.length; i++) {
    if (
      DB_USER[i].login.username === username &&
      DB_USER[i].login.password === password
    ) {
      return DB_USER[i];
    }
  }
};
