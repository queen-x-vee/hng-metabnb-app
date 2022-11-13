import React from "react";
import MainImage from './images/Frame 59546.png'
const Main3 = () => {
  return (
    <div className="w-full bg-purple py-8 ">
      <div className="w-10/12 flex flex-col mx-auto md:flex-row md:justify-between md:gap-12 md:items-center">
        <div className="my-8 h-100 flex flex-col justify-between md:w-6/12">
          <div className="font-Rose font-bold text-5xl text-white mb-9 ">
            Metabnb NFTs
          </div>
          <div className="font-Rose font-normal text-lg text-white text-left mb-14">
            Discover our NFT gift cards collection. Loyal customers
            gets amazing gift cards which are traded as NFTs. These NFTs gives our customer access
            to loads of our exclusive services.
          </div>
          <button className="bg-white text-purple rounded-lg py-4 w-40">
            Learn More
          </button>
        </div>
        <div className=" mx-auto w-8/12 md:w-6/12">
          <img src={MainImage} className='w-full h-4/5 py-20' alt='mainImage3'/>
        </div>
      </div>
    </div>
  );
};

export default Main3;
