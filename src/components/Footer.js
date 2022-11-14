import React from "react";
import Facebook from "./images/facebook-263-721950.png";
import Instagram from "./images/instagram-216-721958.png";
import Twitter from "./images/twitter-241-721979.png";
import Metabnb from "./images/footer-bnb.png"
import Copyright from "./images/ri_copyright-line.png"

const Footer = () => {
  return (
    <div className="w-full bg-footer-black ">
      <div className="w-10/12 mx-auto flex flex-col-reverse justify-center md:flex-row md:justify-between">
        <div className="w-4/12 flex flex-col  justify-center content-between m-6 mt-8">
          <div className="w-10/12 p-3">
            <img src={Metabnb} className='w-9/12' alt='meta'/>
          </div>
          <div className="w-6/12 flex flex-row justify-between p-3 mt-14 mb-2">
            <img src={Facebook} alt='footerImage'/>
            <img src={Instagram} alt='footerImage2'/>
            <img src={Twitter} alt='footerImage3' />
          </div>
          <div className="w-full flex flex-row p-3 ">
            <img src={Copyright} alt='copyright'/>
            <span className="text-white">2022 Metabnb</span>
          </div>
        </div>
        <div className="flex flex-row justify-between font-Rose w-7/12 p-2 m-6">
          <div className="m-3">
            <div className="mb-2 text-white font-bold text-lg">Community</div>
            <ul className="text-footer-white font-normal text-sm leading-8 mr-2">
              <li>NFT</li>
              <li>Tokens</li>
              <li>Landlords</li>
              <li>Discord</li>
            </ul>
          </div>
          <div className="m-3" >
            <div className="mb-2 text-white font-bold text-lg">Places</div>
            <ul className="text-footer-white font-normal text-sm leading-8 mr-2">
              <li>Castle</li>
              <li>Farms</li>
              <li>Beach</li>
              <li>Learn more</li>
            </ul>
          </div>
          <div className="m-3">
            <div className="mb-2 text-white font-bold text-lg">About us</div>
            <ul className="text-footer-white font-normal text-sm leading-8 pr-2">
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
