import React from "react";
import { graphql, usePreloadedQuery, PreloadedQuery } from "react-relay";
import "./App.css";
import TodoList from "./TodoList";
import { MainContentQuery } from "./__generated__/MainContentQuery.graphql";

type Props = {
  queryRef: PreloadedQuery<MainContentQuery>;
};

export default function MainContent({ queryRef }: Props) {
  const data = usePreloadedQuery(
    graphql`
      query MainContentQuery {
        ...TodoList_todos
      }
    `,
    queryRef
  );

  return <TodoList todos={data}></TodoList>;
}
