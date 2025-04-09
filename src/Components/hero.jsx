import React from 'react';
const hero = () => {
    return (
        <>
            <div className='bg-[url(../../public/assets/Banner-min.jpg)] bg-no-repeat bg-cover h-200 '>
                <div className='grid gap-5'>
                <h1 className='sora text-4xl pt-[239px] pl-[140px]'>Bid on Unique Items from <br /> Around the World</h1>
                <h1 className='sora text-sm font-light pl-[140px]'>Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions</h1>
                <button className="btn bg-white text-black rounded-3xl ml-[140px] w-40">Explore Auctions</button>
                </div>

            </div>
        </>
    );
};

export default hero;