import React from 'react';



const navbar = () => {
    return (
        <>
<div className="navbar bg-white text-black shadow-sm px-6 md:px-40">
  {/* Navbar Start (Logo & Mobile Menu) */}
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
        </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        <li><a>Home</a></li>
        <li><a>Auctions</a></li>
        <li><a>Categories</a></li>
        <li><a>How it works</a></li>
      </ul>
    </div>
    <a className="text-2xl md:text-3xl text-[#003EA4] font-bold">
      Auction <span className="text-[#FFD337]">Gallery</span>
    </a>
  </div>

  {/* Navbar Center (Menu for Desktop) */}
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 gap-8 text-lg font-medium poppins">
      <li><a>Home</a></li>
      <li><a>Auctions</a></li>
      <li><a>Categories</a></li>
      <li><a>How it works</a></li>
    </ul>
  </div>

  {/* Navbar End (Notifications & Avatar) */}
  <div className="navbar-end gap-3">
    <button className="btn btn-ghost btn-circle">
      <div className="indicator">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
        </svg>
        <span className="badge badge-primary badge-xs indicator-item">9</span>
      </div>
    </button>

    {/* Avatar with Dropdown */}
    <div className="dropdown dropdown-end">
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
        <div className="w-10 rounded-full">
          <img
            alt="User Avatar"
            src="https://i.ibb.co/PZB1tm6H/6305507424051774711.jpg"
          />
        </div>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
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
</div>

        </>
    );
};

export default navbar;