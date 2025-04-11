import React, { useState } from 'react';
import { toast } from 'react-toastify';

import img1 from '../../public/heart-svgrepo-com.png';
import img2 from '../../public/red-heart-svgrepo-com.png';

const Blog = ({ blog, handleBookmark }) => {
  const [bookmarked, setBookmarked] = useState(false);

  const notify = () =>
    toast(`Add ${blog.title} Successfully`, {
      autoClose: 3000,
      closeButton: true,
      hideProgressBar: false,
      pauseOnHover: true,
      draggable: true,
    });

  const ButtonBookmark = () => {
    setBookmarked(!bookmarked);
  };

  const handleClick = () => {
    handleBookmark(blog);
    notify();
    ButtonBookmark();
  };

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
        <button onClick={handleClick}>
          <img src={bookmarked ? img2 : img1} alt="bookmark" className='w-5'/>
        </button>
      </td>
    </tr>
  );
};

export default Blog;
