import React, { useEffect, useState } from 'react'
import Posts from './Posts';

const Post = () => {
    const [posts,setPosts] = useState([]);
    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setPosts(data))
    },[]);
  return (
    <div>
      <h3>Post : {posts.length}</h3>
      {
        posts.map((post)=> (
            <Posts post={post}/>
        ))
      }
    </div>
  )
}

export default Post;
 