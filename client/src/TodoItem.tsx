import React from "react";
import graphql from "babel-plugin-relay/macro";
import { useFragment } from "react-relay";
import { TodoItem_todo$key } from "./__generated__/TodoItem_todo.graphql";

export type Props = {
  todo: TodoItem_todo$key;
};

// https://gitmemory.com/issue/facebook/relay/1682/454293013

export default function TodoItem(props: Props) {
  const todo = useFragment(
    graphql`
      fragment TodoItem_todo on Todo {
        todoId: id
        task
        completed
      }
    `,
    props.todo
  );

  return <li>{todo.task}</li>;
}
