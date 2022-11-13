import React from "react";
import MbText from "./images/MBToken.png";
import MbIcon from "./images/Group 59536.png";
import OpenSeaText from "./images/OpenSea.png";
import OpenSeaIcon from "./images/logo.png";
import MetaMaskIcon from "./images/Group 4038.png";
import MetaMaskText from "./images/Group 4039.png";

const Banner = () => {
  return (
    <div className="w-full bg-purple">
      <div className="w-10/12 mx-auto flex flex-row justify-between items-center h-16">
        <div className="flex flex-row h-6 ">
          <img src={MbIcon} alt='banner'  />
          <img src={MbText} alt='banner1'  />
        </div>
        <div className="flex flex-row h-6">
          <img src={MetaMaskIcon} alt='banner2'  />
          <img src={MetaMaskText} alt='banner3'  />
        </div>
        <div className="flex flex-row h-6">
          <img src={OpenSeaIcon} alt='banner4'/>
          <img src={OpenSeaText} alt='banner5'  />
        </div>
      </div>
    </div>
  );
};

export default Banner;
