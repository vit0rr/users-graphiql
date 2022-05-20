// import graphql, { GraphQLInt, GraphQLString, GraphQLSchema } from "graphql";
// import _ from 'lodash';
const graphql = require("graphql");
const _ = require('lodash');

const { GraphQLObjectType, GraphQLInt, GraphQLString, GraphQLSchema } = graphql;

const users = [
    {id: '1', firstName: "Vitor", age:18},
    {id: '2', firstName: "Pedro", age:18},
    {id: '3', firstName: "João", age:38},
]

const UserType = new GraphQLObjectType({
  name: "User",
  fields: {
    id: { type: GraphQLString },
    firstName: { type: GraphQLString },
    age: { type: GraphQLInt },
  },
});

const RootQuery = new GraphQLObjectType({
    name: 'RootQueryType',
    fields: {
        user: {
            type: UserType,
            args: {id: {type: GraphQLString}},
            resolve(parentValue, args) {
                return _.find(users, {id: args.id});
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery
})
