const { gql } = require('apollo-server-express');

const deceasedTypeDefs = gql`
    extend type Query {
        deceased(id: Int!): Deceased
    }
    type Deceased {
        id: Int!
        hello: String
    }
`;

const deceasedResolvers = {
    Deceased: {
        hello: () => 'Hello world!',
    },
};

module.exports = {
    deceasedTypeDefs,
    deceasedResolvers,
};
