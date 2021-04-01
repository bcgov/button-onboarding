import {
  Environment,
  Network,
  RecordSource,
  RequestParameters,
  Store,
  Variables,
} from "relay-runtime";

async function fetchQuery(operation: RequestParameters, variables: Variables) {
  // Fetch data from GitHub's GraphQL API:
  const response = await fetch("/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      query: operation.text,
      variables,
    }),
  });

  if (!response.ok) {
    throw new Error(`Response is ${response.status}`);
  }

  // Get the response as JSON
  const json = await response.json();

  // GraphQL returns exceptions (for example, a missing required variable) in the "errors"
  // property of the response. If any exceptions occurred when processing the request,
  // throw an error to indicate to the developer what went wrong.
  if (Array.isArray(json.errors)) {
    console.log(json.errors);
    throw new Error(
      `Error fetching GraphQL query '${
        operation.name
      }' with variables '${JSON.stringify(variables)}': ${JSON.stringify(
        json.errors
      )}`
    );
  }

  // Otherwise, return the full payload.
  return json;
}

const environment = new Environment({
  network: Network.create(fetchQuery),
  store: new Store(new RecordSource(), { gcReleaseBufferSize: 10 }),
});

export default environment;
