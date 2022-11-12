import React from "react";
import MbText from "./images/MBToken.png";
import OpenSeaText from "./images/OpenSea.png";
import MetaMaskIcon from "./images/Group 4038.png";
import MetaMaskText from "./images/Group 4039.png";

const Banner = () => {
  return (
    <div className="w-full bg-purple">
      <div className="w-10/12 mx-auto flex flex-row justify-between">
        <div>
          <img />
          <img src={MbText} />
        </div>
        <div>
          <img />
          <img src={MetaMaskText} />
        </div>
        <div>
          <img />
          <img src={OpenSeaText} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
