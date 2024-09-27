/**
 * @generated SignedSource<<0d35933949ceea644f6127f19b697eba>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Query } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListTestQuery$variables = {};
export type TodoListTestQuery$data = {
  readonly query: {
    readonly " $fragmentSpreads": FragmentRefs<"TodoList_query">;
  };
};
export type TodoListTestQuery = {
  response: TodoListTestQuery$data;
  variables: TodoListTestQuery$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "kind": "Literal",
    "name": "first",
    "value": 200
  }
],
v1 = {
  "alias": null,
  "args": null,
  "kind": "ScalarField",
  "name": "id",
  "storageKey": null
},
v2 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "ID"
},
v3 = {
  "enumValues": null,
  "nullable": true,
  "plural": false,
  "type": "Cursor"
},
v4 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "String"
},
v5 = {
  "enumValues": null,
  "nullable": false,
  "plural": false,
  "type": "Boolean"
};
return {
  "fragment": {
    "argumentDefinitions": [],
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "args": null,
            "kind": "FragmentSpread",
            "name": "TodoList_query"
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Query",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": [],
    "kind": "Operation",
    "name": "TodoListTestQuery",
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Query",
        "kind": "LinkedField",
        "name": "query",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": (v0/*: any*/),
            "concreteType": "TasksConnection",
            "kind": "LinkedField",
            "name": "allTasks",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "TasksEdge",
                "kind": "LinkedField",
                "name": "edges",
                "plural": true,
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "concreteType": "Task",
                    "kind": "LinkedField",
                    "name": "node",
                    "plural": false,
                    "selections": [
                      (v1/*: any*/),
                      {
                        "alias": null,
                        "args": null,
                        "kind": "ScalarField",
                        "name": "rowId",
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
              },
              {
                "kind": "ClientExtension",
                "selections": [
                  {
                    "alias": null,
                    "args": null,
                    "kind": "ScalarField",
                    "name": "__id",
                    "storageKey": null
                  }
                ]
              }
            ],
            "storageKey": "allTasks(first:200)"
          },
          {
            "alias": null,
            "args": (v0/*: any*/),
            "filters": null,
            "handle": "connection",
            "key": "TaskList_allTasks",
            "kind": "LinkedHandle",
            "name": "allTasks"
          },
          (v1/*: any*/)
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "27ba8b53c457770b75138940e97670f1",
    "id": null,
    "metadata": {
      "relayTestingSelectionTypeInfo": {
        "query": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Query"
        },
        "query.allTasks": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "TasksConnection"
        },
        "query.allTasks.__id": (v2/*: any*/),
        "query.allTasks.edges": {
          "enumValues": null,
          "nullable": false,
          "plural": true,
          "type": "TasksEdge"
        },
        "query.allTasks.edges.cursor": (v3/*: any*/),
        "query.allTasks.edges.node": {
          "enumValues": null,
          "nullable": true,
          "plural": false,
          "type": "Task"
        },
        "query.allTasks.edges.node.__typename": (v4/*: any*/),
        "query.allTasks.edges.node.completed": (v5/*: any*/),
        "query.allTasks.edges.node.id": (v2/*: any*/),
        "query.allTasks.edges.node.rowId": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "Int"
        },
        "query.allTasks.edges.node.task": (v4/*: any*/),
        "query.allTasks.pageInfo": {
          "enumValues": null,
          "nullable": false,
          "plural": false,
          "type": "PageInfo"
        },
        "query.allTasks.pageInfo.endCursor": (v3/*: any*/),
        "query.allTasks.pageInfo.hasNextPage": (v5/*: any*/),
        "query.id": (v2/*: any*/)
      }
    },
    "name": "TodoListTestQuery",
    "operationKind": "query",
    "text": "query TodoListTestQuery {\n  query {\n    ...TodoList_query\n    id\n  }\n}\n\nfragment TodoListItem_todo on Task {\n  id\n  rowId\n  task\n  completed\n}\n\nfragment TodoList_query on Query {\n  allTasks(first: 200) {\n    edges {\n      node {\n        id\n        ...TodoListItem_todo\n        __typename\n      }\n      cursor\n    }\n    pageInfo {\n      endCursor\n      hasNextPage\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "d06def2a55bf613fcead07dcd6c3c6c4";

export default node;
