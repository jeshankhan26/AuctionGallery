import React from 'react';

const Footer = () => {
    return (
        <>
            <div className='bg-white text-center items-center text-black py-20'>
            <div>
            <a className="text-3xl text-[#003EA4]">Auction <span className='text-[#FFD337]'>Gallery</span> </a>
            </div>
            <div className=''>
            <ul className="flex gap-5 px-170 py-2 text-xl">
      <li><a>Bid.</a></li>
      <li><a>Win.</a></li> 
      <li><a>Own</a></li>
    </ul>
            </div>
            <div className=''>
            <ul className="flex gap-5 px-138 pt-2 pb-5 text-xl">
      <li><a>Home</a></li>
      <li><a>Auctions</a></li>
      
      <li><a>Categories</a></li>
      <li><a>How to works</a></li>
    </ul>
            </div>
            <div>
            <a className="">© 2025 AuctionHub. All rights reserved. </a>
            </div>
            </div>
        </>
    );
};

export default Footer;