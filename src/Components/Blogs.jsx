import React, { useEffect, useState } from 'react';

import Blog from './blog';

const Blogs = () => {

    const [blogs,setBlogs]=useState([])

    useEffect(()=>{
        fetch('blog.json')
      .then(response => response.json())
      .then(json => setBlogs(json))

    },[])

   
    return (
        <>
                 <div className="overflow-x-auto">
            <table className="table ">
              {/* head */}
              <thead className='text-black'>
                <tr>
                  
                  <th>Items</th>
                  <th>Current Bit</th>
                  <th>Time Left</th>
                  <th>Bid Now</th>
                </tr>
              </thead>
              {
                blogs.map((blog)=><Blog blog={blog}/>)
                
              }
              
            </table>
          </div>
        </>
    );
};

export default Blogs;