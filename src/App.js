import React, { Component } from 'react'
import { Route } from 'react-router-dom'
// import * as BooksAPI from './BooksAPI'
import './App.css'
import SearchBooks from './SearchBooks';
import BooksApp from './BooksApp';

class App extends Component {
  render(){
    return(
      <div>
        <Route exact path='/' render={() => (
        <BooksApp/>
        )}/>
        <Route path='/search' render={({ history }) => (
          <SearchBooks />
        )}/>
      </div>
    )
  }
}

export default App
