/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type MainContentQueryVariables = {};
export type MainContentQueryResponse = {
    readonly " $fragmentRefs": FragmentRefs<"TodoList_todos">;
};
export type MainContentQuery = {
    readonly response: MainContentQueryResponse;
    readonly variables: MainContentQueryVariables;
};



/*
query MainContentQuery {
  ...TodoList_todos
}

fragment TodoItem_todo on Todo {
  id
  task
  completed
}

fragment TodoList_todos on Query {
  allTodos {
    nodes {
      id
      ...TodoItem_todo
    }
  }
}
*/

const node: ConcreteRequest = {
  "fragment": {
    "argumentDefinitions": [],
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
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "MainContentQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "TodosConnection",
        "kind": "LinkedField",
        "name": "allTodos",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "Todo",
            "kind": "LinkedField",
            "name": "nodes",
            "plural": true,
            "selections": [
              {
                "alias": null,
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
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "573bfc8a4c05785ca0e36b8bc3796b0e",
    "id": null,
    "metadata": {},
    "name": "MainContentQuery",
    "operationKind": "query",
    "text": "query MainContentQuery {\n  ...TodoList_todos\n}\n\nfragment TodoItem_todo on Todo {\n  id\n  task\n  completed\n}\n\nfragment TodoList_todos on Query {\n  allTodos {\n    nodes {\n      id\n      ...TodoItem_todo\n    }\n  }\n}\n"
  }
};
(node as any).hash = '9e18164dd313f48db63c00ba34da2edb';
export default node;
