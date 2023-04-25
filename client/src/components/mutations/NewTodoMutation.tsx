import { graphql } from "babel-plugin-relay/macro";
import { commitMutation } from "relay-runtime";
import RelayEnvironment from "../../RelayEnvironment";

const mutation = graphql`
  mutation NewTodoMutation($connections: [ID!]!, $input: CreateTaskInput!) {
    createTask(input: $input) {
      taskEdge @appendEdge(connections: $connections) {
        node {
          id
          task
        }
      }
    }
  }
`;

const commit = (task: any, connectionId: any) => {
  return commitMutation(RelayEnvironment, {
    mutation,
    variables: {
      connections: [connectionId],
      input: {
        task: {
          task,
        },
      },
    },
    onCompleted: () => {},
    onError: () => {
      console.log("Add task mutation error");
    },
  });
};

export default commit;