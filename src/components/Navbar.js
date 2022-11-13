import React from "react";
import meta from './images/Group.png'

const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="w-10/12 flex md:flex-row md:justify-between md:items-center md:mx-auto md:mt-12 md:h-12">
        <div className="h-8">
          <img src={meta} className='h-full' alt='logo'/>
        </div>
        <ul className="flex md:flex-row md:justify-between md:w-6/12 md:mx-12 ">
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        
        <button className=" w-40 py-3 rounded-lg bg-purple text-white"> Connect wallet</button>
        
      </div>
    </div>
  );
};

export default Navbar;
