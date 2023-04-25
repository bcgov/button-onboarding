import { graphql } from "babel-plugin-relay/macro";
import TodoListItem from "./TodoListItem";
import { useFragment } from "react-relay/hooks";
import AddTask from "./AddTodo";

// MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

interface Props {
  query: any;
}

export default function TodoList(props: Props) {
    const data = useFragment(
        graphql`
        fragment TodoList_query on Query {
            allTasks(first: 200) @connection(key: "TaskList_allTasks") {
              __id
              edges {
                node {
                  id
                  ...TodoListItem_todo
                }
              }
            }
        }
    `,
    props.query
    );

    const list = data.allTasks.edges.map((edge: any) => <TodoListItem task={edge.node} key={edge.node.id} />);

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={8} style={{ boxShadow: "5px 10px grey", minWidth: "22rem" }}>
            <Card sx={{ border: 1 }}>
              <CardContent>{list}</CardContent>
              <AddTask connectionId={data.allTasks.__id} />
            </Card>
          </Grid>
        </Grid>
    );

}