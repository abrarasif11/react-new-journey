import React from 'react'
import Bookmark from './Bookmark'

const Bookmarks = ({bookMarks}) => {
  return (
    <div className="md:w-1/3">
      <h1 className='text-2xl'>Bookmarks : {bookMarks.length}</h1>
      {
        bookMarks.map(bookMark => <Bookmark 
        key={bookMark.id}
        bookMark={bookMark}
        />)
      }
    </div>
  )
}

export default Bookmarks
