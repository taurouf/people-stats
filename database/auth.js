/* eslint-disable no-plusplus */
/* eslint-disable consistent-return */
import { DB_USER } from './dbusers';

const userLogin = (username, password) => {
  for (let i = 0; DB_USER.length; i++) {
    const user = DB_USER[i];

    if (!user.login) {
      return {};
    }

    if (
      user.login.username === username
      && user.login.password === password
    ) {
      return user;
    }
  }
};
export default userLogin;
