/* tslint:disable */
/* eslint-disable */
// @ts-nocheck

import { ReaderFragment } from "relay-runtime";
import { FragmentRefs } from "relay-runtime";
export type TodoList_todos = {
    readonly allTodos: {
        readonly nodes: ReadonlyArray<{
            readonly id: number;
            readonly " $fragmentRefs": FragmentRefs<"TodoItem_todo">;
        } | null>;
    } | null;
    readonly " $refType": "TodoList_todos";
};
export type TodoList_todos$data = TodoList_todos;
export type TodoList_todos$key = {
    readonly " $data"?: TodoList_todos$data;
    readonly " $fragmentRefs": FragmentRefs<"TodoList_todos">;
};



const node: ReaderFragment = {
  "argumentDefinitions": [],
  "kind": "Fragment",
  "metadata": null,
  "name": "TodoList_todos",
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
              "args": null,
              "kind": "FragmentSpread",
              "name": "TodoItem_todo"
            }
          ],
          "storageKey": null
        }
      ],
      "storageKey": null
    }
  ],
  "type": "Query",
  "abstractKey": null
};
(node as any).hash = '319b896f4ecae99576ed413b2492380c';
export default node;
