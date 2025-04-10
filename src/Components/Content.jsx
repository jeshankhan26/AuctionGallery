import React from 'react';
import { FaRegHeart } from "react-icons/fa";
import Blogs from './Blogs';

const Content = () => {
    return (
        <>
       <div className=' bg-[#EBF0F5] px-30 py-20'>
      <div className='grid gap-3 py-5'>
      <h1 className='text-3xl text-[#0E2954] sora font-medium'>Active Auctions</h1>
      <p>Discover and bid on extraordinary items</p>
      </div>
       <div className='flex gap-5 '>
        {/* Left */}
        <div className='w-[60%] bg-white rounded-lg'>
 <Blogs/>
        </div>
        {/* Right */}
        <div className='w-[30%] bg-white rounded-lg'>
           <div className='flex justify-center gap-2 py-3'>
           <FaRegHeart className='h-9 w-5'/>
           <h1 className='text-2xl'>Favourite Items</h1>
           </div>
           <hr className='text-[#DCE5F3]'/>

           <div>

           </div>
           <hr className='text-[#DCE5F3]'/>
           <div className='flex justify-between px-3 text-2xl'>
            <h1>Total bids Amount</h1>
            <h1>$0000</h1>
           </div>
        </div>
       </div>
       </div>
            
        </>
    );
};

export default Content;