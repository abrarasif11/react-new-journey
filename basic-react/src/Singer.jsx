import React from 'react'

const Singer = ({singer}) => {
    console.log(singer)
  return (
    <div>
      <h1>SIngers : {singer.name}  </h1>
      <h3>Age : {singer.age}</h3>
    </div>
  )
}

export default Singer
