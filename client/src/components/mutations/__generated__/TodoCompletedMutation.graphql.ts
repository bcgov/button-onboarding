/**
 * @generated SignedSource<<f1e9414f7108ad353dcfe968750f704e>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type UpdateTaskInput = {
  clientMutationId?: string | null;
  id: string;
  taskPatch: TaskPatch;
};
export type TaskPatch = {
  completed?: boolean | null;
  dateCreated?: any | null;
  dateUpdated?: any | null;
  rowId?: number | null;
  task?: string | null;
};
export type TodoCompletedMutation$variables = {
  input: UpdateTaskInput;
};
export type TodoCompletedMutation$data = {
  readonly updateTask: {
    readonly task: {
      readonly completed: boolean;
      readonly id: string;
    } | null;
  } | null;
};
export type TodoCompletedMutation = {
  response: TodoCompletedMutation$data;
  variables: TodoCompletedMutation$variables;
};

const node: ConcreteRequest = (function(){
var v0 = [
  {
    "defaultValue": null,
    "kind": "LocalArgument",
    "name": "input"
  }
],
v1 = [
  {
    "alias": null,
    "args": [
      {
        "kind": "Variable",
        "name": "input",
        "variableName": "input"
      }
    ],
    "concreteType": "UpdateTaskPayload",
    "kind": "LinkedField",
    "name": "updateTask",
    "plural": false,
    "selections": [
      {
        "alias": null,
        "args": null,
        "concreteType": "Task",
        "kind": "LinkedField",
        "name": "task",
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
            "name": "completed",
            "storageKey": null
          }
        ],
        "storageKey": null
      }
    ],
    "storageKey": null
  }
];
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "TodoCompletedMutation",
    "selections": (v1/*: any*/),
    "type": "Mutation",
    "abstractKey": null
  },
  "kind": "Request",
  "operation": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Operation",
    "name": "TodoCompletedMutation",
    "selections": (v1/*: any*/)
  },
  "params": {
    "cacheID": "7e2a14d92e9d8f09ef85150e81c06c95",
    "id": null,
    "metadata": {},
    "name": "TodoCompletedMutation",
    "operationKind": "mutation",
    "text": "mutation TodoCompletedMutation(\n  $input: UpdateTaskInput!\n) {\n  updateTask(input: $input) {\n    task {\n      id\n      completed\n    }\n  }\n}\n"
  }
};
})();

(node as any).hash = "111e2d518d6ccda6ef5bffb7f9b0995c";

export default node;
