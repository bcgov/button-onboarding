/**
 * @generated SignedSource<<e9d48b0a283593a937b8e68642e45000>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
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
        readonly id: string;
        readonly rowId: number;
        readonly task: string;
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
],
v2 = {
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
        }
      ],
      "storageKey": null
    }
  ],
  "storageKey": null
};
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
          (v2/*: any*/)
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
          (v2/*: any*/),
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
    "cacheID": "fb21ff2f2a016e76211395584fbcf3a9",
    "id": null,
    "metadata": {},
    "name": "NewTodoMutation",
    "operationKind": "mutation",
    "text": "mutation NewTodoMutation(\n  $input: CreateTaskInput!\n) {\n  createTask(input: $input) {\n    taskEdge {\n      node {\n        id\n        rowId\n        task\n      }\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "5e90dd1d5c085fcbed21bfae9579518c";

export default node;
