import { graphql } from "babel-plugin-relay/macro";
import TodoListItem from "./TodoListItem";
import { useFragment } from "react-relay/hooks";

// MUI imports
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Grid } from "@mui/material";

interface Props {
  query: any;
}

function TodoList(props: Props) {
    const data = useFragment(
        graphql`
            fragment TodoList_query on Query {
            allTasks {
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

    console.log(data.allTasks);
    const listItems = data.allTasks.edges.map((todo: { node: { id: any; }; }) => 
        <TodoListItem
            key={todo.node.id}
            todo={todo.node}
        />
    )

    return (
        <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"
          style={{ minHeight: "100vh" }}
        >
          <Grid item xs={3} style={{ boxShadow: "5px 10px grey" }}>
            <Card sx={{ border: 1 }}>
              <CardContent>{listItems}</CardContent>
            </Card>
          </Grid>
        </Grid>
    );

}

export default TodoList;