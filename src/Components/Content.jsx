import React, { useState } from 'react';
import { FaRegHeart } from "react-icons/fa";
import { IoClose } from "react-icons/io5";

import Blogs from './Blogs';

const Content = () => {
  const [Bookmark, setBookmark] = useState([]);

    const [Bit, setBit] = useState([0]);

  const handleBookmark = (blog) => {
    // Prevent duplicates
    const exists = Bookmark.find((item) => item.id === blog.id);
    if (!exists) {
      setBookmark([...Bookmark, blog]);
      const newCount = parseFloat(Bit) + blog.currentBidPrice;

      setBit(newCount);
      
    }
  };

  const handleRemoveBookmark = (id) => {
    const removedItem = Bookmark.find((item) => item.id === id);
    const updatedBookmarks = Bookmark.filter((item) => item.id !== id);
    setBookmark(updatedBookmarks);
  
    if (removedItem) {
      const newCount = parseFloat(Bit) - parseFloat(removedItem.currentBidPrice);
      setBit(newCount);
    }
  };
  

  

  return (
    <>
      <div className='bg-[#EBF0F5] px-10 md:px-30 py-20'>
        {/* Section Title */}
        <div className='grid gap-3 py-5'>
          <h1 className='text-3xl text-[#0E2954] font-medium sora'>Active Auctions</h1>
          <p className='text-gray-600'>Discover and bid on extraordinary items</p>
        </div>

        {/* Main Content */}
        <div className='flex flex-col lg:flex-row gap-5'>
          {/* Left Section */}
          <div className='lg:w-[60%] w-full bg-white rounded-lg p-4 shadow'>
            <Blogs  handleBookmark={handleBookmark} />
          </div>

          {/* Right Section */}
          <div className='lg:w-[35%] w-full bg-white rounded-lg p-4 shadow'>
            {/* Favourite Header */}
            <div className='flex items-center justify-center gap-2 py-3'>
              <FaRegHeart className='h-7 w-7 text-[#0E2954]' />
              <h1 className='text-2xl font-semibold'>Favourite Items</h1>
            </div>

            <hr className='border-[#DCE5F3] my-3' />

            {/* Favourites List */}
            <div className='min-h-[100px]'>
              {
                Bookmark.map((maked) => (
                  <div key={maked.id} className="grid gap-7">
                    <div className="border-b border-[#DCE5F3] pl-3">
                      <div className="flex justify-between items-center py-3">
                        
                        {/* Left Side */}
                        <div className="flex items-center gap-5">
                          <div>
                            <img src={maked.image} className="w-10 h-10 object-cover" alt="item" />
                          </div>
                          <div>
                            <h2 className="sora text-[#0E2954] text-sm font-semibold">{maked.title}</h2>
                            <div className="flex gap-5 text-sm text-gray-600">
                              <h1>${maked.currentBidPrice}</h1>
                              <h1>{maked.timeLeft}</h1>
                            </div>
                          </div>
                        </div>

                        {/* Close Button */}
                        <button onClick={() => handleRemoveBookmark(maked.id)}>
                          <IoClose className="w-5 h-5 text-gray-500 hover:text-red-500 transition" />
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              }
            </div>

            <hr className='border-[#DCE5F3] my-3' />

            {/* Total Bids Section */}
            <div className='flex justify-between text-xl px-2'>
              <h1 className='font-medium'>Total Bids Amount</h1>
              <h1 className='text-[#0E2954]'>${Bit}</h1>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Content;
