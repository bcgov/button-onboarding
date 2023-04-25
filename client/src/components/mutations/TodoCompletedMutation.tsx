import RelayEnvironment from "../../RelayEnvironment";
import { commitMutation } from "relay-runtime";
import { graphql } from "babel-plugin-relay/macro";

const mutation = graphql`
  mutation TodoCompletedMutation($input: UpdateTaskInput!) {
    updateTask(input: $input) {
      task {
        id
        completed
      }
    }
  }
`;

const commit = (id: string, completed: boolean) => {
  return commitMutation(RelayEnvironment, {
    mutation,
    variables: { input: { taskPatch: { completed }, id } },
    onCompleted: () => {},
    onError: () => {},
  });
};

export default { commit };