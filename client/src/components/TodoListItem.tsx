import { graphql } from "babel-plugin-relay/macro";
import { useFragment, commitMutation } from 'react-relay/hooks';
import type { TodoListItem_todo$key } from "./__generated__/TodoListItem_todo.graphql";
import TodoCompletedMutation from "./mutations/TodoCompletedMutation";

// MUI imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

type Props = {
  todo: TodoListItem_todo$key
}

export default function TodoListItem(props: any) {
  const data = useFragment(
      graphql`
        fragment TodoListItem_todo on Task {
          id
          task
          completed
        }
      `,
      props.task,
  );

  const handleChange = () => {
    TodoCompletedMutation.commit(data.id, !data.completed);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Checkbox checked={data.completed} key={data.id} onChange={handleChange} />}
        label={data.task}
      />
    </FormGroup>
  );
}