import React from "react";
import meta2 from "./images/Group 4028.png";
import './style/main.css'

const Main = () => {
  return (
    <div className="w-full">
      <div className="w-10/12 flex flex-col mx-auto mt-52 gap-24 md:flex-row md:justify-between md:gap-12">
        <div className="my-8 h-100  flex flex-col justify-between md:w-6/12">
          <div className="font-Rose text-5xl text-left align-top tracking-tighter">
            <h1 className="font-normal">Rent a <span className="main-span">Place</span> away from <span className="main-span">Home</span> in the <span className="main-span">Metaverse</span></h1>
          </div>

          <p className="text-xl font-Rose font-normal text-sky-400">
            we provide you access to luxury and affordable houses in the
            metaverse, get a chance to turn your imagination to reality at your
            comfort zone
          </p>
          <div className="w-full flex flex-row h-14">
            <input
              name="search"
              type="search"
              placeholder="Search"
              className="border rounded-tl-lg rounded-bl-lg border-grey w-3/5 "
            />
          
              <button className="bg-purple rounded-br-lg rounded-tr-lg w-2/5 h-full text-white" > Search</button>
          
          </div>
        </div>
        <div className="md:w-5/12">
          <img src={meta2} className='w-full' alt='mainImage' />
        </div>
      </div>
    </div>
  );
};

export default Main;
