// import React from "react";
// import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
// import "./App.css";
// import TodoList from "./TodoList";
// import { AppQuery } from "./__generated__/AppQuery.graphql";

// type Props = {
//   appQueryRef: PreloadedQuery<AppQuery>;
// };

// export default function App({ appQueryRef }: Props) {
//   const data = usePreloadedQuery(
//     graphql`
//       query AppQuery {
//         ...TodoList_todos
//       }
//     `,
//     appQueryRef
//   );

//   // @ts-ignore
//   return <TodoList todos={data}></TodoList>;
// }

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
