import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import { toast } from 'react-toastify';

const Blog = ({ blog, handleBookmark }) => {
  const notify = () => toast(`Add ${blog.title} Successfully`, {
    autoClose: 3000, 
    closeButton: true, 
    hideProgressBar: false,
    pauseOnHover: true, 
    draggable: true, 
  });

  return (
    <tr className="border-b border-[#DCE5F3]">
      <td>
        <div className="flex gap-3 items-center">
          <img src={blog.image} className="w-10" alt="item" />
          <h2 className="sora text-[#0E2954]">{blog.title}</h2>
        </div>
      </td>
      <td>${blog.currentBidPrice}</td>
      <td>{blog.timeLeft}</td>
      <td className="pl-8">
        <button onClick={() => { handleBookmark(blog); notify();  }}>
          <FaRegHeart className="h-7 " />
         
        </button>
        
      </td>
    </tr>
  );
};

export default Blog;
