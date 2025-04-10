import React from 'react';
import { FaRegHeart } from "react-icons/fa";

const Content = () => {
    return (
        <>
       <div className=' bg-[#EBF0F5] px-30 py-20'>
       <h1 className='text-2xl'>Active Auctions</h1>
       <p>Discover and bid on extraordinary items</p>
       <div className='flex gap-5 '>
        {/* Left */}
        <div className='w-[60%] bg-white rounded-lg'>
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
    <tbody>
      {/* row 1 */}
      <tr>
       
        <td>Cy Ganderton</td>
        <td>Quality Control Specialist</td>
        <td>Blue</td>
        <td className='pl-8'><FaRegHeart className='h-7 '/></td>
      </tr>
      {/* row 2 */}
      <tr>
      
        <td>Hart Hagerty</td>
        <td>Desktop Support Technician</td>
        <td>Purple</td>
        <td className='pl-8'><FaRegHeart className='h-7'/></td>
      </tr>
      {/* row 3 */}
      <tr>
     
        <td>Brice Swyre</td>
        <td>Tax Accountant</td>
        <td>Red</td>
        <td className='pl-8'><FaRegHeart className='h-7'/></td>
      </tr>
    </tbody>
  </table>
</div>
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