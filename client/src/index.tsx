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

const initialQueryRef = loadQuery<MainContentQueryType>(
  Environment,
  MainContentQuery,
  { count: 2 },
  { fetchPolicy: "store-or-network" }
);

ReactDOM.render(
  <RelayEnvironmentProvider environment={Environment}>
    <App appQueryRef={initialQueryRef} />
  </RelayEnvironmentProvider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
