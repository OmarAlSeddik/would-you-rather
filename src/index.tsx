// default imports //
import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
// mui imports //
import CircularProgress from "@mui/material/CircularProgress";
// redux imports //
import { Provider } from "react-redux";
import store from "./store";
// redux-persist imports //
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";

let persistor = persistStore(store);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate loading={<CircularProgress />} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
