/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainContentQueryVariables = {
    count?: number | null;
    cursor?: unknown | null;
};
export type MainContentQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoList_todos">;
};
export type MainContentQuery = {
    readonly response: MainContentQueryResponse;
    readonly variables: MainContentQueryVariables;
};



/*
query MainContentQuery(
  $count: Int
  $cursor: Cursor
) {
  ...TodoList_todos
}

fragment TodoItem_todo on Todo {
  todoId: id
  task
  completed
}

fragment TodoList_todos on Query {
  allTodos(first: $count, after: $cursor) {
    edges {
      node {
        todoId: id
        ...TodoItem_todo
        __typename
      }
      cursor
    }
    pageInfo {
      endCursor
      hasNextPage
    }
  }
}
*/

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "count"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "cursor"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "after",
    "variableName": "cursor"
  },
  {
    "kind": "Variable",
    "name": "first",
    "variableName": "count"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "MainContentQuery",
    "selections": [
      {
        "args": null,
        "kind": "FragmentSpread",
        "name": "TodoList_todos"
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "MainContentQuery",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "TodosConnection",
        "kind": "LinkedField",
        "name": "allTodos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TodosEdge",
            "kind": "LinkedField",
            "name": "edges",
            "plural": true,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Todo",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "alias": "todoId",
                    "args": null,
                    "kind": "ScalarField",
                    "name": "id",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "task",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "completed",
                    "storageKey": null
                  },
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__typename",
                    "storageKey": null
                  }
                ],
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "cursor",
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "concreteType": "PageInfo",
            "kind": "LinkedField",
            "name": "pageInfo",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "endCursor",
                "storageKey": null
              },
              {
                "alias": null,
                "args": null,
                "kind": "ScalarField",
                "name": "hasNextPage",
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      },
      {
        "alias": null,
        "args": (v1/*: any*/),
        "filters": [],
        "handle": "connection",
        "key": "TodoList_allTodos",
        "kind": "LinkedHandle",
        "name": "allTodos"
      }
    ]
  },
  "params": {
    "cacheID": "6185d5bb4d0092ef646801780f2af39b",
    "id": null,
    "metadata": {},
    "name": "MainContentQuery",
    "operationKind": "query",
    "text": "query MainContentQuery(\n  $count: Int\n  $cursor: Cursor\n) {\n  ...TodoList_todos\n}\n\nfragment TodoItem_todo on Todo {\n  todoId: id\n  task\n  completed\n}\n\nfragment TodoList_todos on Query {\n  allTodos(first: $count, after: $cursor) {\n    edges {\n      node {\n        todoId: id\n        ...TodoItem_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();
(node as any).hash = 'a37e90a5f5944c77961c8f3cc19d277d';
export default node;
