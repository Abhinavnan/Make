const express = require('express');
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require('graphql');
const { createHandler } = require('graphql-http/lib/use/express');

const app = express();

// Define schema
const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    fields: {
      message: {
        type: GraphQLString,
        resolve: () => 'Hi there',
      },
    },
  }),
});
app.use(express.json())
// Use GraphQL handler
app.use('/graphql', createHandler({ schema }));

// Start server
app.listen(5000)

