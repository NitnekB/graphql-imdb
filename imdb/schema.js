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
const byTitleParam = '?i='
const apikey = '&apikey=';

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RequestMovieByID',
    description: 'GraphQLObjectType: Search for a specific movie title on Omdb API',

    fields: () => ({
      movie: {
        type: MovieType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          baseUrl + byTitleParam + args.id + apikey + global.gConfig.omdb_api_key
        ).then(response => response.json())
      }
    })
  })
})
