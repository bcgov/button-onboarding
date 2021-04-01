import React from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";

import TodoItem from "./TodoItem";
import { TodoList_todos$key } from "./__generated__/TodoList_todos.graphql";

type Props = {
  todos: TodoList_todos$key;
};

// https://relay.dev/docs/guided-tour/refetching/refetching-queries-with-different-data/#if-you-need-to-avoid-suspense

export default function TodoList(props: Props) {
  const { data } = usePaginationFragment(
    graphql`
      fragment TodoList_todos on Query
      @refetchable(queryName: "TodoListPaginationQuery") {
        allTodos(first: $count, after: $cursor)
          @connection(key: "TodoList_allTodos") {
          edges {
            node {
              id
              ...TodoItem_todo
            }
          }
        }
      }
    `,
    props.todos
  );

  return (
    <React.Suspense fallback="Loading">
      <h1>Todo List</h1>
      <div>{JSON.stringify(data)}</div>
      <ul>
        {(data.allTodos?.edges ?? []).map((edge) => {
          const node = edge.node;
          return <TodoItem todo={node} />;
        })}
      </ul>
    </React.Suspense>
  );
}
