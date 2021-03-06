// requires
const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./imdb/schema')

// environment variables
process.env.NODE_ENV = 'development';

// uncomment below line to test this code against staging environment
// process.env.NODE_ENV = 'staging';

// config variables
const config = require('./config/config.js');

// module variables
const app = express();

app.get('/', (req, res) => {
  res.json(global.gConfig);
});

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}));

app.listen(global.gConfig.node_port, () => {
  console.log(`${global.gConfig.app_name} listening on port ${global.gConfig.node_port}`);
});
