import { createSlice } from "@reduxjs/toolkit";

export const initialState = {
  isLoggingIn: false,
  user: {
    uid: "",
    first: "",
    last: "",
    email: "",
    photoURL: "",
  },
};

export const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, payload) => {
      const load = payload.payload;
      state.isLoggingIn = true;
      state.user.uid = load.user.uid;
      state.user.first = load.user.first;
      state.user.last = load.user.last;
      state.user.email = load.user.email;
      state.user.photoURL = load.user.photoURL;
      console.log("connected");
    },
    logout: (state) => {
      state.isLoggingIn = false;
      console.log("logout");
    },
  },
});

export const { login, logout } = authSlice.actions;
export const selectAuth = (state) => state;
export default authSlice.reducer;
