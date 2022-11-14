import React from "react";
import meta from "../images/Group.png";
import Modal from "../Modal";
import './Navbar.css'
import { FaTimes, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [modal, setModal] = React.useState(false);
  const handleShowMessage = () => {
    setModal(!modal);
  };

  const closeModal = () => {
    setModal(!modal);
  };
  const [show, setShow] = React.useState(false);
  const handleClick = () => {
    setShow(!show);
  };

  return (
    <div className="w-full">
      <div className="header">
        <div className="imageHeader">
          <img src={meta} className="" alt="logo" />
        </div>
        <ul className={show ? "nav-menu active" : "nav-menu"}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/places">Place to stay</Link>
          </li>
          <li>
            <Link to="/">NFTs</Link>
          </li>
          <li>
            <Link to="/">Community</Link>
          </li>
          
         
        </ul>
        <button
          className=" w-40 py-3 rounded-lg bg-purple text-white"
          onClick={handleShowMessage}
        >
          Connect wallet
        </button>

        
      </div>
      
        <div className="hamburger" onClick={handleClick}>
                {show ? (<FaTimes size={20} style={{ color: '#a02279',marginLeft:'16px' }} />) : (<FaBars size={20} style={{ color: '#a02279',marginLeft:'16px' }} />)}

            </div>
    
      {modal ? <Modal closeModal={closeModal} /> : null}
    </div>
  );
};

export default Navbar;
