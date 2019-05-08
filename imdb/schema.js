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
const byTitleParam = '?t='
const apikey = '&apikey=';

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Search',
    description: 'GraphQLObjectType: Search for a specific movie title on Omdb API',

    fields: () => ({
      movie: {
        type: MovieType,
        args: {
          title: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          baseUrl + byTitleParam + args.title + apikey + global.gConfig.omdb_api_key
        ).then(response => response.json())
      }
    })
  })
})
