/**
 * @generated SignedSource<<1c0148706fd45aae0c1fb50314c40320>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ConcreteRequest, Mutation } from 'relay-runtime';
export type DeleteTaskByRowIdInput = {
  clientMutationId?: string | null;
  rowId: number;
};
export type DeleteTodoMutation$variables = {
  connections: ReadonlyArray<string>;
  input: DeleteTaskByRowIdInput;
};
export type DeleteTodoMutation$data = {
  readonly deleteTaskByRowId: {
    readonly deletedTaskId: string | null;
  } | null;
};
export type DeleteTodoMutation = {
  response: DeleteTodoMutation$data;
  variables: DeleteTodoMutation$variables;
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
  "kind": "ScalarField",
  "name": "deletedTaskId",
  "storageKey": null
};
return {
  "fragment": {
    "argumentDefinitions": (v0/*: any*/),
    "kind": "Fragment",
    "metadata": null,
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
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
    "name": "DeleteTodoMutation",
    "selections": [
      {
        "alias": null,
        "args": (v1/*: any*/),
        "concreteType": "DeleteTaskPayload",
        "kind": "LinkedField",
        "name": "deleteTaskByRowId",
        "plural": false,
        "selections": [
          (v2/*: any*/),
          {
            "alias": null,
            "args": null,
            "filters": null,
            "handle": "deleteEdge",
            "key": "",
            "kind": "ScalarHandle",
            "name": "deletedTaskId",
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
    "cacheID": "1d390dc02f1b0bf7d80af37fc197fa56",
    "id": null,
    "metadata": {},
    "name": "DeleteTodoMutation",
    "operationKind": "mutation",
    "text": "mutation DeleteTodoMutation(\n  $input: DeleteTaskByRowIdInput!\n) {\n  deleteTaskByRowId(input: $input) {\n    deletedTaskId\n  }\n}\n"
  }
};
})();

(node as any).hash = "558eb0cbdfcc82b4ea80a302626fd823";

export default node;
