import React from 'react';



const navbar = () => {
    return (
        <>
            <div className="navbar bg-white text-black shadow-sm px-40">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow gap-5">
        <li><a>Item 1</a></li>
        <li><a>Item 3</a></li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <a className="text-3xl text-[#003EA4]">Auction <span className='text-[#FFD337]'>Gallery</span> </a>
  </div>
  <div className="navbar-center grid grid-flow-col ">
    <ul className="grid grid-flow-col px-1 gap-10 text-xl poppins">
      <li><a>Home</a></li>
      <li><a>Auctions</a></li>
      
      <li><a>Categories</a></li>
      <li><a>How to works</a></li>
    </ul>
  </div>
  <div className="navbar-end dropdown dropdown-end gap-3">
  <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
        <span className="badge badge-primary badge-xs indicator-item w-4">9</span>
      </div>
    </button>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="Tailwind CSS Navbar component"
            src="https://i.ibb.co.com/PZB1tm6H/6305507424051774711.jpg" />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li>
          <a className="justify-between">
            Profile
            <span className="badge">New</span>
          </a>
        </li>
        <li><a>Settings</a></li>
        <li><a>Logout</a></li>
      </ul>
    </div>
</div>
        </>
    );
};

export default navbar;