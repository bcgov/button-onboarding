module.exports = {
    // ...
    // Configuration options accepted by the `relay-compiler` command-line tool and `babel-plugin-relay`.
    language: "typescript",
    src: "./src",
    schema: "./schema.graphql",
    exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
  };