import React from 'react'

const Book = ({book}) => {
  return (
    <div>
     <p> Book Name : {book.name}</p>
      Book Price : {book.price}
    </div>
  )
}

export default Book
