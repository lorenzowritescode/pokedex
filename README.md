# Check out the [live version](http://perpetualjourney.github.io/pokedex)!
A little web-app to visualise the data made available from the [PokeAPI](http://pokeapi.co)

## Running a local web-server
```
grunt serve
```
## Preparing the build
```
grunt build
grunt wiredep
```
## Pushing to gh-pages
From https://gist.github.com/cobyism/4730490
```
git subtree push --prefix dist origin gh-pages
```
