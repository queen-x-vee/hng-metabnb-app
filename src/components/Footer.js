import React from "react";
import Facebook from "./images/facebook-263-721950.png";
import Instagram from "./images/instagram-216-721958.png";
import Twitter from "./images/twitter-241-721979.png";

const Footer = () => {
  return (
    <div className="w-full bg-footer-black ">
      <div className="w-10/12 mx-auto flex flex-row justify-between">
        <div className="">
          <div></div>
          <div>
            <img src={Facebook} alt='footerImage'/>
            <img src={Instagram} alt='footerImage2'/>
            <img src={Twitter} alt='footerImage3' />
          </div>
          <div></div>
        </div>
        <div className="flex flex-row justify-between text-white w-7/12">
          <div>
            <div>Community</div>
            <ul>
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div>
            <div>Places</div>
            <ul>
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div>
            <div>About us</div>
            <ul>
              <li>Road map</li>
              <li>Creators</li>
              <li>Career</li>
              <li>Contact us</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
