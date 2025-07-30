import React from 'react'

const User = ({user}) => {
  return (
    <div>
      <h2>Name : {user.name} </h2>
      <h4>Email : {user.email} </h4>
    </div>
  )
}

export default User
