import React from "react";
import meta from './images/Group.png'

const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="w-10/12 flex flex-row justify-between align-middle mx-auto mt-12 h-12">
        <div className="h-8 mt-4">
          <img src={meta} className='h-full ' alt='logo'/>
        </div>
        <ul className="flex flex-row justify-between gap-12 h-6 mt-4">
          <li>Home</li>
          <li>Place to stay</li>
          <li>NFTs</li>
          <li>Community</li>
        </ul>
        
        <a href='/connect' className=" w-40 rounded-lg bg-purple"> hi</a>
        
      </div>
    </div>
  );
};

export default Navbar;
