import React, { useEffect, useState } from 'react';
import { ToastContainer } from 'react-toastify';

import Blog from './blog';

const Blogs = ({handleBookmark}) => {

    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blog.json')
      .then(response => response.json())
      .then(json => setBlogs(json))

    },[])

   
    return (
        <>
<div className="overflow-x-auto">
  <table className="table">
    {/* head */}
    <thead className='text-black'>
      <tr className='border-b border-[#DCE5F3] '>
        <th>Items</th>
        <th>Current Bid</th>
        <th>Time Left</th>
        <th>Bid Now</th>
      </tr>
    </thead>
    <tbody>
      {
        blogs.map((blog, index) => (
          <Blog handleBookmark={handleBookmark} key={blog.id || index} blog={blog} />
        ))
      }
    </tbody>
  </table>
  <ToastContainer />
</div>

        </>
    );
};

export default Blogs;