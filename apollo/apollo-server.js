const _ = require('lodash');
const { makeExecutableSchema } = require('apollo-server');
const { ApolloServer } = require('apollo-server-express');
const { deceasedTypeDefs, deceasedResolvers } = require('./typeDeceased');
const { testTypeDefs, testResolvers } = require('./typeTest');

module.exports = async (db) => {
    const Query = `
    type Query {
        _empty: String
    }`;

    const resolvers = {};

    const schema = makeExecutableSchema({
        typeDefs: [Query, deceasedTypeDefs, testTypeDefs],
        resolvers: _.merge(resolvers, deceasedResolvers, testResolvers),
    });

    const apolloServer = new ApolloServer({ schema });

    return apolloServer;
};