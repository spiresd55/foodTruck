# Food Truck Challenge

## Getting Started

1. Install Mongo and run locally on port 27017
2. ```bash npm run seed:db ```
3. ```bash npm run start:dev ```
4. Open http://localhost:4000 in preferred browser

### What I did with the code challenge

I decided to make a graphql server to interact with the data provided in the CSV dump. 

### Tech Stack
1. Mongo - Database 
2. Apollo Server - GraphQL Server
3. Typescript
4. Graphql-codegen
5. Mongoose ODM
6. bun 

### Code explained
- ./scripts/seed.ts - Runs a script that traverses through the JSON array found in ./src/db/data.json. As it traverses through it will insert a document for each item in the array. 
- ./codegen.yml - The Graphql Codegen tool takes a schema.graphql file and converts it into typescript interfaces/types. The YML file represents setting on how that is outputted to the __generated__ folder. 
- tsconfig.json - typescript settings
- ./src/index.js - Starts an Apollo Server with the Graphql playground 
- ./src/db/index.js - Connects mongoose to the mongo db
- ./src/graphql/schema.graphql - The graphql schema for this project
- ./src/graphql/resolvers.ts - Resolvers are responsible for matching Queries/Mutations to the services that generate the data for the requested graphql query/mutation. This is where the main code lives for this project. Based on the input passed in the query, will determine which FoodTrucks are returned from the service.
- ./src/Models/FoodTruck.ts - FoodTruck Mongoose Schema Object , use this to interact with the FoodTruck collection 
- ./src/utils - wrote some utils that make writing the query logic easier.

## Explaining The GraphQl Playground

https://drive.google.com/file/d/1OsPBC4Zx8Oxcn6sYmoXaCjAQ3gPPjTFg/view?usp=sharing 

## If I had more time

1. Add unit tests/e2e tests for the GraphQL service
2. Query by Location (latitude, longitude)
3. Build a React Client 
- The Client would simply display a data table with filters
- It would use tailwindCSS, Apollo Client, and Jotei Atoms for state management.
- React Testing Library for testing
4. Add linting
