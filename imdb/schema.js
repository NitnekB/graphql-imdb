const fetch = require('node-fetch')
const {
  GraphQLSchema,
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} = require('graphql')

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  description: '...',

  fields: () => ({
    title: {
      type: GraphQLString,
      resolve: json =>
        json.Title
    },
    year: {
      type: GraphQLInt,
      resolve: json =>
        json.Year
    },
    ratings: {
      type: new GraphQLList(RatingType),
      resolve: json =>
        json.Ratings
    }
  })
})

const RatingType = new GraphQLObjectType({
  name: 'Rating',
  description: '...',

  fields: () => ({
    source: {
      type: GraphQLString,
      resolve: json =>
        json.Source
    },
    value: {
      type: GraphQLString,
      resolve: json =>
        json.Value
    }
  })
})

module.exports = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'Query',
    description: '...',

    fields: () => ({
      movie: {
        type: MovieType,
        args: {
          id: { type: GraphQLString }
        },
        resolve: (root, args) => fetch(
          `http://www.omdbapi.com/?i=${args.id}&apikey=67804764`
        ).then(response => response.json())
      }
    })
  })
})
