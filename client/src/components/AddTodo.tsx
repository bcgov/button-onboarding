import { Button, Grid, TextField } from "@mui/material";
import { useState } from "react";
import commitNewTodoMutation from "./mutations/NewTodoMutation";


export default function AddTodo(props: any) {

    const [newTask, setNewTask] = useState<string>("");

  const handleFormSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (newTask) {
      const trimmedText = newTask.trim();
      commitNewTodoMutation(trimmedText, props.connectionId);
      setNewTask("");
    }
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setNewTask(event.currentTarget.value);

  return (
    <Grid
      container
      component="form"
      noValidate
      autoComplete="off"
      sx={{ mb: 3, px: 2 }}
      alignItems="center"
      justifyContent="space-between"
      onSubmit={handleFormSubmit}
    >
      <TextField
        id="outlined-basic"
        label="Something to do..."
        variant="outlined"
        size="small"
        value={newTask}
        onChange={handleChange}
        />
        <Button variant="contained" sx={{ px: 4 }} type="submit">
          Add
        </Button>
      </Grid>
    );
}