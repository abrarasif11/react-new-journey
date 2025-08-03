import React from 'react'

const Bookmark = ({bookMark}) => {
  return (
    <div>
      <h1 className='text-2xl p-4 bg-slate-300 rounded-2xl m-5'>{bookMark.title}</h1>
    </div>
  )
}

export default Bookmark
