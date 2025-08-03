import React from 'react'
import Bookmark from './Bookmark'

const Bookmarks = ({bookMarks, readingTime}) => {
  return (
    <div className="md:w-1/3 bg-amber-500 ml-20 mt-4 p-4">
      <div>
        <p className='text-2xl ml-6 p-6 bg-green-400 rounded-4xl'>Reading time : {readingTime}</p>
      </div>
      <h1 className='text-2xl m-8 p-4'>Bookmarks : {bookMarks.length}</h1>
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
