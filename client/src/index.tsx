import React from "react";
import ReactDOM from "react-dom";
import Environment from "./RelayEnvironment";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { RelayEnvironmentProvider, loadQuery } from "react-relay";
import MainContentQuery, {
  MainContentQuery as MainContentQueryType,
} from "./__generated__/MainContentQuery.graphql";

// At some point during app initialization
const initialQueryRef = loadQuery<MainContentQueryType>(
  Environment,
  MainContentQuery,
  {}
);

ReactDOM.render(
  <React.StrictMode>
    <RelayEnvironmentProvider environment={Environment}>
      <App appQueryRef={initialQueryRef} />
    </RelayEnvironmentProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
