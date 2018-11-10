# [MyReads Project](https://myreadstracker.herokuapp.com/)
****
![pic](https://user-images.githubusercontent.com/28492382/48304998-6da98680-e549-11e8-9cb9-787e75a600c5.png)


This is a App that helps a person to order books as per three categories => read / currently reading / wish to read . A person can arrange books in  in respective shelfs and whatch them update in realtime. 

Also, there is a Add button where A user can search for books by there respective [search terms](https://github.com/sb39/my-reads-tracker-app/blob/master/SEARCH_TERMS.md) and you can also add them to the home deck.

You can also open this search deck in new tabs depending upon your convinience.
Also the interface is `User Friendly` so that you can use it at your ease.

## Getting This App on locally

### To run/view this app:

* install all project dependencies with `npm install`
* start the development server with `npm start`
* by deafult the page would be visible at `localhost:3000`

### `search Results` 🔍

* Returns a Promise which resolves to a JSON object containing a collection of a maximum of 20 book objects.
* These books do not know which shelf they are on. They are raw results only. You'll need to make sure that books have the correct state while on the search page.

## Important ❗❗❗
The backend API uses a fixed set of `cached search results` and is limited to a particular set of search terms, which can be found in [SEARCH_TERMS.md](SEARCH_TERMS.md). That list of terms are the _only_ terms that will work with the backend, so don't be surprised if your searches for Basket Weaving or Bubble Wrap don't come back with any results.

## Dependencies 

1. [ReactJS](https://reactjs.org/)
2. [Heroku](https://www.heroku.com/)
3. [HerokuReactBuildPack](https://elements.heroku.com/buildpacks/mars/create-react-app-buildpack)
4. [Npm](https://www.npmjs.com/)
5. [NodeJS](https://nodejs.org/)

Node[4] and NodeJS[5] are by-default used by `create-react-app`. 

## Contributing

Contributions are disabled for this project. 
