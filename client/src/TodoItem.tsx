import React from "react";
import { graphql, useFragment } from "react-relay";
import { TodoItem_todo$key } from "./__generated__/TodoItem_todo.graphql";

export type Props = {
  todo: TodoItem_todo$key;
};

export default function TodoItem(props: Props) {
  const todo = useFragment(
    graphql`
      fragment TodoItem_todo on Todo {
        id
        task
        completed
      }
    `,
    props.todo
  );

  return <div>{todo.task}</div>;
}
