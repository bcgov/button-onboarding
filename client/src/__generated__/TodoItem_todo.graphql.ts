/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoItem_todo = {
    readonly id: number;
    readonly task: string;
    readonly completed: boolean;
    readonly " $refType": "TodoItem_todo";
};
export type TodoItem_todo$data = TodoItem_todo;
export type TodoItem_todo$key = {
    readonly " $data"?: TodoItem_todo$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoItem_todo">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoItem_todo",
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
  "type": "Todo",
  "abstractKey": null
};
(node as any).hash = 'f73fcb81371fb0168ccbe43e7639dc7c';
export default node;
