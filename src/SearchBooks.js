import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
import BookPrototype from './BookProto'
import { DebounceInput } from 'react-debounce-input'

class SearchBooks extends Component{
    
    state = {
        books: [],
        display: [],
        query : ''
    }
// query update state
    updateQuery = (query) => {
        this.setState({ query: query.trim() })
       }
// update content in UI
       onShelfUpdate = (book, shelfName) => {
        BooksAPI.update(book, shelfName)
        const { books } = this.state
        const updateIndex = books.findIndex(b => b.id === book.id)
        const updateBook = books[updateIndex]
        updateBook.shelf = shelfName
    
        this.setState({
          books: [...books.slice(0, updateIndex), updateBook, ...books.slice(updateIndex + 1)]
        })
      }
    // search query for fetching from booksAPI
      searchBooks(query) {
        const { display } = this.state
        this.updateQuery(query)
        if (query) {
          BooksAPI.search(query, 20).then((results) => {
            if (results && results.length > 0) {
              let searchResults = results
                searchResults.map((book) => book.shelf = 'none' )
                display.map((book) => {
                  const updateIndex = searchResults.findIndex(s => s.id === book.id)
                  if (searchResults[updateIndex]) {
                    searchResults[updateIndex].shelf = book.shelf
                }
              })
              this.setState({ books: searchResults })
            } else {
              this.setState({ books: [] })
            }
          })
        } else {
          this.setState({ books: [] })
        }
      }
    render(){
        const {books, query} = this.state
    
        return(
            

            <div className="search-books">
              <div className="search-books-bar">
                <Link exact to='/' className ="close-search">Close</Link>
                <div className="search-books-input-wrapper">
                
                        <DebounceInput minLength={2} debounceTimeout={100} onChange={(e) => this.searchBooks(e.target.value)}
                    />  
                </div>
              </div>
              <div className="search-books-results">
              {/* {JSON.stringify(this.state)} */}
              <ul className="books-grid">
                {books.length > 0 ? (books.map((book, index) => (
                    // if book length is available then update UI
                                <BookPrototype key={index} book={book} onShelfUpdate={this.onShelfUpdate}
                                />
                                    )))
                                  : ( query.length === 0 ? (<p>Enter something</p>) : (<p>No Data Available</p>) )
                                //   check for query updates
                }
  		        </ul>
              </div>
            </div>
        )
    }
}

export default SearchBooks