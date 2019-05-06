# graphql-imdb

GraphQL-imdb is a simple project which use _REST Omdb API_ to convert it in _GraphQL_ through _Node.js_

This project is just for fun!

## Setup

First, get your own [_API Key_ from _www.omdbapi.com_](http://www.omdbapi.com/apikey.aspx)

Then configure the app!

### Add API Key to config file

The application will use a specific configuration file `config_secrets.json`.
For obvious reason, this file must not be _git versioned_!

To setting up, you can duplicate and rename the existing file `config_secrets.example.json`

```bash
cp config/config_secrets.example.json config/config_secrets.json
```

Finally in the file, just change:

```json
{
  ...
  "omdb_api_key": "YOUR_API_KEY_HERE"
}
```

### Install and Launch the app

Just complete those commands below

```bash
npm install
```

Then launch the app

```bash
npm start
```

Finally, open your favorite Nav and go to `http://localhost:3000/graphql`

Here's an example of query for the movie _Guardians of the Galaxy Vol. 2_

```json
query {
  movie(id: "tt3896198") {
    imdb_id
    title
    runtime
    director
    genre
    plot
    country
    boxoffice
    production
    ratings {
      source
      value
    }
  }
}
```
