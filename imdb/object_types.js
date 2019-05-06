import {
  GraphQLObjectType,
  GraphQLInt,
  GraphQLString,
  GraphQLList
} from 'graphql';

const MovieType = new GraphQLObjectType({
  name: 'Movie',
  description: 'MovieType with fields',

  fields: () => ({
    imdb_id: {
      type: GraphQLString,
      resolve: json =>
        json.imdbID
    },
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
    runtime: {
      type: GraphQLString,
      resolve: json =>
        json.Runtime
    },
    director: {
      type: GraphQLString,
      resolve: json =>
        json.Director
    },
    genre: {
      type: GraphQLString,
      resolve: json =>
        json.Genre
    },
    plot: {
      type: GraphQLString,
      resolve: json =>
        json.Plot
    },
    country: {
      type: GraphQLString,
      resolve: json =>
        json.Country
    },
    boxoffice: {
      type: GraphQLString,
      resolve: json =>
        json.BoxOffice
    },
    production: {
      type: GraphQLString,
      resolve: json =>
        json.Production
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
  description: 'Nested MovieType: RatingType with fields',

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

export default MovieType;
