import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './graphql/resolvers';
import { connect } from './db';
import fs from 'fs';
import path from 'path';

const server = new ApolloServer({
    typeDefs:  fs.readFileSync(
        path.join(__dirname, './graphql/schema.graphql'),
        'utf8'),
    resolvers,
});

await connect();

const { url } = await startStandaloneServer(server, {
    listen: { port: 4000 },
});
  
console.log(`🚀  Server ready at: ${url}`);