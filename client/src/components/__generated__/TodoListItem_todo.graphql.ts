/**
 * @generated SignedSource<<9cb4808535905d2563f9c68ff3b8c514>>
 * @lightSyntaxTransform
 * @nogrep
 */

/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { Fragment, ReaderFragment } from 'relay-runtime';
import { FragmentRefs } from "relay-runtime";
export type TodoListItem_todo$data = {
  readonly completed: boolean;
  readonly id: string;
  readonly task: string;
  readonly " $fragmentType": "TodoListItem_todo";
};
export type TodoListItem_todo$key = {
  readonly " $data"?: TodoListItem_todo$data;
  readonly " $fragmentSpreads": FragmentRefs<"TodoListItem_todo">;
};

const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoListItem_todo",
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
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "b75ff8fd86d399150665636ad8d38457";

export default node;
