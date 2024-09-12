/**
 * @generated SignedSource<<1adaff24c1ef52a8565271adfd331869>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type CreateTaskInput = {
  clientMutationId?: string | null;
  task: TaskInput;
};
export type TaskInput = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  rowId: number;
  task: string;
};
export type NewTodoMutation$variables = {
  connections: ReadonlyArray<string>;
  input: CreateTaskInput;
};
export type NewTodoMutation$data = {
  readonly createTask: {
    readonly taskEdge: {
      readonly node: {
        readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
      } | null;
    } | null;
  } | null;
};
export type NewTodoMutation = {
  response: NewTodoMutation$data;
  variables: NewTodoMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "connections"
  },
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "kind": "Variable",
    "name": "input",
    "variableName": "input"
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "NewTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TasksEdge",
            "kind": "LinkedField",
            "name": "taskEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Task",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
                "selections": [
                  {
                    "args": null,
                    "kind": "FragmentSpread",
                    "name": "TodoListItem_todo"
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "NewTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "CreateTaskPayload",
        "kind": "LinkedField",
        "name": "createTask",
        "plural": false,
        "selections": [
          {
            "alias": null,
            "args": null,
            "concreteType": "TasksEdge",
            "kind": "LinkedField",
            "name": "taskEdge",
            "plural": false,
            "selections": [
              {
                "alias": null,
                "args": null,
                "concreteType": "Task",
                "kind": "LinkedField",
                "name": "node",
                "plural": false,
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
                  }
                ],
                "storageKey": null
              }
            ],
            "storageKey": null
          },
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "appendEdge",
            "key": "",
            "kind": "LinkedHandle",
            "name": "taskEdge",
            "handleArgs": [
              {
                "kind": "Variable",
                "name": "connections",
                "variableName": "connections"
              }
            ]
          }
        ],
        "storageKey": null
      }
    ]
  },
  "params": {
    "cacheID": "9b22d8f0e477f02c02db72d5c2eeeed3",
    "id": null,
    "metadata": {},
    "name": "NewTodoMutation",
    "operationKind": "mutation",
    "text": "mutation NewTodoMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    taskEdge {\n      node {\n        ...TodoListItem_todo\n        id\n      }\n    }\n  }\n}\n\nfragment TodoListItem_todo on Task {\n  id\n  rowId\n  task\n  completed\n}\n"
  }
};
})();

(node as any).hash = "55930787ab54bcbe08c88ff14b65abf0";

export default node;
