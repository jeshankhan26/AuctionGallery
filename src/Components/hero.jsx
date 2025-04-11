import React from 'react';
const hero = () => {
    return (
        <>
          <div
  className="bg-[url('/assets/Banner-min.jpg')] bg-no-repeat bg-cover h-[600px] flex items-center"
>
  <div className="grid gap-5 max-w-4xl pl-10 md:pl-[140px]">
    <h1 className="sora text-4xl md:text-5xl font-semibold text-white">
      Bid on Unique Items from <br /> Around the World
    </h1>
    <h2 className="sora text-sm md:text-base font-medium text-white">
      Discover rare collectibles, luxury goods, and vintage <br /> treasures in our curated auctions
    </h2>
    <button className="bg-white text-black rounded-3xl sora text-base font-semibold px-8 py-3 w-fit">
      Explore Auctions
    </button>
  </div>
</div>

        </>
    );
};

export default hero;