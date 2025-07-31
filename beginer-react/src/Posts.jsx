import React from 'react'

const Posts = ({post}) => {
  return (
    <div>
      <h1>Post Title : {post.title}</h1>
      <h2>Post Body : {post.body}</h2>
    </div>
  )
}

export default Posts
