import React from 'react';
const hero = () => {
    return (
        <>
            <div className='bg-[url(../../public/assets/Banner-min.jpg)] bg-no-repeat bg-cover h-200 '>
                <div className='grid gap-5'>
                <h1 className='sora text-5xl pt-[239px] pl-[140px] font-semibold text-white'>Bid on Unique Items from <br /> Around the World</h1>
                <h1 className='sora text-sm font-medium pl-[140px] text-white'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</h1>
                <button className="btn bg-white text-black rounded-3xl ml-[140px] w-50 sora text-5 px-8 py-4">Explore Auctions</button>
                </div>

            </div>
        </>
    );
};

export default hero;