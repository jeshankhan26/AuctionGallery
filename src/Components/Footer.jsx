import React from 'react';

const Footer = () => {
    return (
        <>
 <div className='bg-white text-center text-black py-20'>
  <div>
    <h2 className="text-3xl text-[#003EA4] font-semibold">
      Auction <span className='text-[#FFD337]'>Gallery</span>
    </h2>
  </div>

  <div className='mt-4'>
    <ul className="flex justify-center gap-5 text-xl">
      <li><a href="#">Bid.</a></li>
      <li><a href="#">Win.</a></li>
      <li><a href="#">Own</a></li>
    </ul>
  </div>

  <div className='mt-2'>
    <ul className="flex justify-center gap-5 text-xl">
      <li><a href="#">Home</a></li>
      <li><a href="#">Auctions</a></li>
      <li><a href="#">Categories</a></li>
      <li><a href="#">How it works</a></li>
    </ul>
  </div>

  <div className='mt-4'>
    <p className="text-sm">© 2025 AuctionHub. All rights reserved.</p>
  </div>
</div>

        </>
    );
};

export default Footer;