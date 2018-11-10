import React, {Component} from 'react'
import PropTypes from 'prop-types'
import BookProtype from './BookProto'


class RowUpdate extends Component{
    render() {
        const {title, books, onShelfUpdate} = this.props
        return (
          <div className="bookshelf">
            <p className="bookshelf-title">{title}</p>
            {/* row UI component */}
            <div className="bookshelf-books">
                <ul className="books-grid">
                {books.length > 0 ? (books.map((book, index) => (
                  <BookProtype key={index} book={book} onShelfUpdate={onShelfUpdate}
                    />
                )))
                  : (<p>No data</p>)
                }
                </ul>
            </div>
          </div>
        )
      }
}
// defination of propTypes
RowUpdate.propTypes = {
    title: PropTypes.string.isRequired,
    books: PropTypes.array,
    onShelfUpdate: PropTypes.func
  }
export default RowUpdate