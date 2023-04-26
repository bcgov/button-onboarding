/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";
import { act, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { commitMutation, graphql } from "react-relay";
import ComponentTestingHelper from "@button-inc/relay-testing-library";
import TodoList from "../components/TodoList";
import compiledTodoListTestQuery, { TodoListTestQuery } from "./__generated__/TodoListTestQuery.graphql";


// create the test query and spread the fragment you want to test 
const testQuery = graphql`
    query TodoListTestQuery @relay_test_operation {
        query {
            ...TodoList_query
        }
    }
`;

const mockQueryPayload = {
    Query() {
        return {
            allTodos: {
                edges: [
                    {
                        node: {
                            id: "testId",
                            task: "test task",
                            completed: "true",
                            rowId: 1
                        },
                    },
                ],
            },
        };
    },
};

const defaultComponentProps = {
    onSubmit: jest.fn(),
};

const componentTestingHelper = 
    new ComponentTestingHelper<TodoListTestQuery>({
        component: TodoList,
        testQuery: testQuery,
        compiledQuery: compiledTodoListTestQuery,
        getPropsFromTestQuery: (data) => ({
            query: data.query,
        }),
        defaultQueryResolver: mockQueryPayload,
        defaultQueryVariables: {},
        defaultComponentProps: defaultComponentProps,
    });

describe("ComponentTestingHelper", () => {
    beforeEach(() => {
        jest.restoreAllMocks();
        componentTestingHelper.reinit();
    });

    it("initializes the component testing helper", () => {
        expect(componentTestingHelper.environment).toEqual(expect.anything());
    })

    it("loads the query", () => {
        componentTestingHelper.loadQuery();
        expect(
          componentTestingHelper.environment.mock.getAllOperations()[0].root.node
            .name
        ).toEqual("TodoListTestQuery");
    });

    it("renders the component", () => {
        componentTestingHelper.loadQuery();
        componentTestingHelper.renderComponent();
        expect(screen.getByText("test task")).toBeInTheDocument();
    });

    it("calls the mutation", async () => {
        componentTestingHelper.loadQuery();
        componentTestingHelper.renderComponent();

        screen.logTestingPlaygroundURL();

        expect(
            screen.getByRole('button', { name: /x/i })
        ).toBeInTheDocument();

        await act( async () => {
            userEvent.click(screen.getByRole('button', { name: /x/i }));
        });

        componentTestingHelper.expectMutationToBeCalled("DeleteTodoMutation", {});
    });

});