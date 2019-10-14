const express = require("express");
const graphHttp = require("express-graphql");
const { GraphQLSchema } = require("graphql");

const { queryType } = require("./query.js");
const { mutationType } = require("./mutation.js");

const app = express();

// Define the Schema
const schema = new GraphQLSchema({ query: queryType, mutation: mutationType });

//Setup the nodejs GraphQL server
app.use("/graphql", graphHttp({ schema, graphiql: true }));

//defining port
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(`Listening on port: ${port}`));
