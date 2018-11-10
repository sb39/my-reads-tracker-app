import React, { Component } from 'react'
// import SearchBooks from './SearchBooks'
import RowUpdate from './RowUpdate'
import { Link } from 'react-router-dom'
import * as BooksAPI from './BooksAPI'
// import RowUpdate from './RowUpdate';

class BooksApp extends Component {
  state = {
  	allBooks: []
  }
  
  componentDidMount() {
    BooksAPI.getAll()
      .then(books => {
        this.setState({ allBooks: books })
	  })
  }

  onShelfUpdate = (book, shelfName) => {
    const { allBooks } = this.state
	const updateIndex = allBooks.findIndex(b => b.id === book.id)
    const updateBook = allBooks[updateIndex]
    updateBook.shelf = shelfName

    this.setState({
      allBooks: [...allBooks.slice(0, updateIndex), updateBook, ...allBooks.slice(updateIndex + 1)]
    })

    BooksAPI.update(book, shelfName)
  }

    render() {
      const { allBooks } = this.state

    const shelfRows = [
      {
    	name: 'Read Articles',
    	books: allBooks.filter(book => book.shelf === 'read')
      },
      {
    	name: 'Currently Reading',
    	books: allBooks.filter(book => book.shelf === 'currentlyReading')
      },
      {
    	name: 'Watch Later',
    	books: allBooks.filter(book => book.shelf === 'wantToRead')
      }
    ]


      return (
        
        <div className="app">
          
            <div className="list-books">
              <div className="list-books-title">
                <h1>MyReads App</h1>
              </div>
              <div className="list-books-content">
                      <ul>
                  {shelfRows && shelfRows.map((shelf, index) => (
                    <RowUpdate
                      key={index}
                      title={shelf.name}
                      books={shelf.books}
                      onShelfUpdate={this.onShelfUpdate}/>
                  ))}
            </ul>
              </div>
              <div className="open-search">
              <Link to='/search' className='add-book'>Add a book</Link>
              </div>
            </div>
          
          {/* call the search books component whenever clicking the button */}
            {/* <SearchBooks /> */}
  
        </div>
      )
    }
  }
export default BooksApp