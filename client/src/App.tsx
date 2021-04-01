import React from "react";
import { useQueryLoader, PreloadedQuery } from "react-relay";
import "./App.css";
import MainContent from "./MainContent";
import MainContentQuery, {
  MainContentQuery as MainContentQueryType,
} from "./__generated__/MainContentQuery.graphql";

type Props = {
  appQueryRef: PreloadedQuery<MainContentQueryType>;
};

export default function App(props: Props) {
  const [queryRef] = useQueryLoader<MainContentQueryType>(
    MainContentQuery,
    props.appQueryRef /* initial query ref */
  );

  return (
    <React.Suspense fallback="Loading query...">
      <MainContent queryRef={queryRef} />
    </React.Suspense>
  );
}
