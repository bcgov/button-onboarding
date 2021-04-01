import React from "react";
import { useQueryLoader, PreloadedQuery } from "react-relay";
import "./App.css";
import MainContent from "./MainContent";
import ErrorBoundary from "./ErrorBoundary";
import MainContentQuery, {
  MainContentQuery as MainContentQueryType,
} from "./__generated__/MainContentQuery.graphql";

type Props = {
  appQueryRef: PreloadedQuery<MainContentQueryType>;
};

export default function App(props: Props) {
  const [queryRef, loadQuery] = useQueryLoader<MainContentQueryType>(
    MainContentQuery,
    props.appQueryRef /* initial query ref */
  );

  if (queryRef == null) {
    return <>"Null query ref"</>;
  }

  return (
    <ErrorBoundary>
      <React.Suspense fallback="Loading">
        <MainContent queryRef={queryRef} />
      </React.Suspense>
    </ErrorBoundary>
  );
}
