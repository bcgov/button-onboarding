/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoItem_todo = {
    readonly todoId: number;
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
    }
  ],
  "type": "Todo",
  "abstractKey": null
};
(node as any).hash = '79ff78597218dd6d3b791e8fe7a37e7a';
export default node;
