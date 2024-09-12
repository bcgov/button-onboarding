import { graphql } from "babel-plugin-relay/macro";
import { useFragment, commitMutation } from 'react-relay/hooks';
import type { TodoListItem_todo$key } from "./__generated__/TodoListItem_todo.graphql";
import commitTodoCompletedMutation from "./mutations/TodoCompletedMutation";
import commitDeleteTodoMutation from "./mutations/DeleteTodoMutation";

// MUI imports
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, IconButton } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { useState } from "react";

interface Props {
  task: TodoListItem_todo$key;
  connectionId: string;
}

export default function TodoListItem(props: Props) {
  const [removeIconBgColor, setRemoveIconBgColor] = useState("grey");

  const styles = {
    color: removeIconBgColor,
  };

  const data = useFragment(
      graphql`
        fragment TodoListItem_todo on Task {
          id
          rowId
          task
          completed
        }
      `,
      props.task,
  );

  const handleChange = () => {
    commitTodoCompletedMutation(data.id, !data.completed);
  };

  const handleDeleteTask = () => {
    commitDeleteTodoMutation(data.rowId, props.connectionId);
  };


  return (
    <Grid container alignItems="center" justifyContent="space-between">
      <Grid item xs={8}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox checked={data.completed} key={data.id} onChange={handleChange} />}
            label={data.task}
          />
        </FormGroup>
      </Grid>
      <Grid item xs={1}>
        <IconButton
          aria-label="delete"
          onMouseEnter={() => setRemoveIconBgColor("red")}
          onMouseLeave={() => setRemoveIconBgColor("grey")}
          onClick={handleDeleteTask}
        >
          <DeleteIcon style={styles} />
        </IconButton>
      </Grid>
    </Grid>
  );
}