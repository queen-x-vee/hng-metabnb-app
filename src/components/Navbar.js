import React from "react";
import meta from './images/Group.png'

const Navbar = () => {
  return (
    <div className="w-full ">
      <div className="w-10/12 flex flex-row justify-between align-middle mx-auto mt-12 h-12">
        <div className="h-8 mt-4">
          <img src={meta} className='h-full ' alt='logo'/>
        </div>
        <ul className="flex flex-row justify-between  ">
          <li className="mx-2 md:mx-0">Home</li>
          <li className="mx-2 md:mx-0">Place to stay</li>
          <li className="mx-2 md:mx-0">NFTs</li>
          <li className="mx-2 md:mx-0">Community</li>
        </ul>
        
        <button className=" w-40 rounded-lg bg-purple text-white"> Connect wallet</button>
        
      </div>
    </div>
  );
};

export default Navbar;
