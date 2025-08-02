import React from 'react'

const Bookmark = ({bookMark}) => {
  return (
    <div>
      <h1 className='text-2xl'>{bookMark.title}</h1>
    </div>
  )
}

export default Bookmark
