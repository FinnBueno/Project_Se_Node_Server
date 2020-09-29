const { gql } = require('apollo-server-express');

const testTypeDefs = gql`
    extend type Query {
        test(id: Int!): Test
    }
    type Test {
        id: Int!
        johan: String
    }
`;

const testResolvers = {
    Test: {
        johan: () => 'Hello johan!',
    },
};

module.exports = {
    testTypeDefs,
    testResolvers,
};
