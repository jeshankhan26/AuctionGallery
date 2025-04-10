import React, { useEffect, useState } from 'react';

const Blogs = () => {

    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blog.json')
      .then(response => response.json())
      .then(json => setBlogs(json))

    },[])

    console.log(blogs)
    return (
        <>
            
        </>
    );
};

export default Blogs;