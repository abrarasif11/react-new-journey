import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = ({handleBookMark}) => {
    const [blogs,setBlogs] = useState([])
    useEffect( () =>{
      fetch('Blogs.json')
      .then((res) => res.json())
      .then(data => setBlogs(data))
    } ,[])
  return (
    <div className="md:w-2/3">
        <h1 className='text-2xl'>Blogs : {blogs.length}</h1>
        {
          blogs.map(blog => <Blog
          key={blog.id}
          blog={blog}
          handleBookMark={handleBookMark}
          />)
        }
    </div>
  )
}

export default Blogs;
