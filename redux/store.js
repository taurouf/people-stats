import { configureStore } from "@reduxjs/toolkit";
import authReducer from "./slices/auth";
import { persistStore, persistReducer, PERSIST } from "redux-persist";
import storage from "redux-persist/lib/storage";

const persistConfig = {
  key: "root",
  version: 1,
  storage,
};

const persistedReducer = persistReducer(persistConfig, authReducer);

export function userStore() {
  return configureStore({
    reducer: { auth: persistedReducer },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [PERSIST],
        },
      }),
  });
}

const store = userStore();

export const persistor = persistStore(store);
export default store;
