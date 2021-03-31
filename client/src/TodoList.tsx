import React from "react";
import { graphql, usePaginationFragment } from "react-relay";

import TodoItem from "./TodoItem";

import { TodoList_todos$key } from "./__generated__/TodoList_todos.graphql";

type Props = {
  todos: TodoList_todos$key;
};

// fragment FriendsListComponent_user on User
//   @refetchable(queryName: "FriendsListPaginationQuery") {
//     name
//     friends(first: $count, after: $cursor)
//     @connection(key: "FriendsList_user_friends") {
//       edges {
//         node {
//           name
//           age
//         }
//       }
//     }
//   }

export default function TodoList(props: Props) {
  const { data } = usePaginationFragment(
    graphql`
      fragment TodoList_todos on Query {
        allTodos {
          nodes {
            id
            ...TodoItem_todo
          }
        }
      }
    `,
    props.todos
  );

  const todos = data?.allTodos.nodes;

  return (
    <>
      <div>
        {todos.map((todo: any) => {
          return <TodoItem todo={todo} />;
        })}
      </div>

      {/* <div>
        {(data.friends?.edges ?? []).map(edge => {
          const node = edge.node;
          return (
            <Suspense fallback={<Glimmer />}>
              <FriendComponent user={node} />
            </Suspense>
          );
        })}
      </div> */}

      {/* <Button
        onClick={() => {
          loadNext(10)
        }}>
        Load more friends
      </Button> */}
    </>
  );
}
