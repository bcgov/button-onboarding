/**
 * @generated SignedSource<<3c49e219b962faa7c00c8bd50e78037d>>
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
  readonly rowId: number;
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
  "type": "Task",
  "abstractKey": null
};

(node as any).hash = "137d841667f29506445325b823e6b394";

export default node;
