import React from "react";
import graphql from "babel-plugin-relay/macro";
import { usePaginationFragment } from "react-relay";

import TodoItem from "./TodoItem";
import { TodoList_todos$key } from "./__generated__/TodoList_todos.graphql";

type Props = {
  todos: TodoList_todos$key;
};

// https://gitmemory.com/issue/facebook/relay/1682/454293013

export default function TodoList(props: Props) {
  const { data } = usePaginationFragment(
    graphql`
      fragment TodoList_todos on Query
      @refetchable(queryName: "TodoListPaginationQuery") {
        allTodos(first: $count, after: $cursor)
          @connection(key: "TodoList_allTodos", filters: []) {
          edges {
            node {
              todoId: id
              ...TodoItem_todo
            }
          }
        }
      }
    `,
    props.todos
  );

  return (
    <>
      <h1>Todo List</h1>
      <div>{JSON.stringify(data)}</div>
      <ul>
        {(data.allTodos?.edges ?? []).map((edge) => {
          const node = edge.node;
          return <TodoItem todo={node} />;
        })}
      </ul>
    </>
  );
}
