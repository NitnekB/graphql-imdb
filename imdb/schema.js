// imports
import fetch from 'node-fetch';
import {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLString
} from 'graphql';
import MovieType from './object_types.js';

// variables
const baseUrl = 'http://www.omdbapi.com/';

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: 'GraphQLObjectType Query to fetch movie by imdb ID',

    fields: () => ({
      movie: {
        type: MovieType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          `${baseUrl}?i=${args.id}&apikey=${global.gConfig.omdb_api_key}`
        ).then(response => response.json())
      }
    })
  })
})
