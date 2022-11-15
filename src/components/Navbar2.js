import React from "react";
import { RiEqualizerLine } from "react-icons/ri";

const Navbar2 = () => {
  return (
    <div className="w-full mt-5">
      <div className="w-10/12  mx-auto flex flex-row justify-between">
        <ul className=" hidden w-6/12 md:w-9/12 md:flex flex-row justify-between text-md leading-tight">
          <li className="m-2">Restaurant</li>
          <li className="m-2">Cottage</li>
          <li className="m-2">Castle</li>
          <li className="m-2">Fantast city</li>
          <li className="m-2">Beach</li>
          <li className="m-2">Carbins</li>
          <li className="m-2">Off-grid</li>
          <li className="my-2">Farm</li>
        </ul>
        <div className=" w-full md:w-fit relative flex flex-row justify-around items-center">

          <select name="places" id="places" className=" w-6/12 border-2 border-nav-input rounded-lg p-2 md:hidden mr-3">
          <option className="text-input-placeholder" value="Places">Places</option>
            <option value="Restaurant">Restaurant</option>
            <option value="Cottage">Cottage</option>
            <option value="Fantast city">Fantast city</option>
            <option value="Beach">Beach</option>
            <option value="Carbins">Carbins</option>
            <option value="Off-grid">Off-grid</option>
            <option value="Farm">Farm</option>
          </select>
          <input
            className=" border-2 border-nav-input rounded-lg p-2 placeholder:text-input-placeholder"
            placeholder={`Location `}
          />
          <RiEqualizerLine
            style={{
              position: "absolute",
              top: "16px",
              right: "16px",
              color: "#333333",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar2;
