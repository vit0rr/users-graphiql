const express = require('express')
const expressGraphQL = require('express-graphql').graphqlHTTP;
const schema = require('./schema/schema.js')

const app = express();

app.use('/graphql', expressGraphQL({
    schema,
    graphiql: true
}))

app.listen(4000, () => {
  console.log("listening on 4000");
});
