import { graphql } from "babel-plugin-relay/macro";
import { useFragment } from "react-relay/hooks";

// MUI imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";

function TodoListItem(props: any) {
  const data = useFragment(
      graphql`
        fragment TodoListItem_todo on Task {
          id
          task
          completed
        }
      `,
      props.todo,
    );

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox defaultChecked={data.completed} key={data.id} />} label={data.task} />
    </FormGroup>
  );
}

export default TodoListItem;