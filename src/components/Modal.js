import React from "react";
import ReactDOM from "react-dom";
import Xmark from "./images/x.png";
import Forward from "./images/Group (1).png";
import Meta from './images/image 66.png'
import WalletC from './images/image 69.png'

const Modal = (props) => {
  return ReactDOM.createPortal(
    <div
      style={{
        position: "absolute",
        top: "0",
        bottom: "0",
        left: "0",
        right: "0",
        display: "grid",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "rgba(0,0,0,0.3)",
        width: "100%",
      }}
      onClick={props.closeModal}
    >
      <div
        style={{
          background: "#fff",
          borderRadius: "16px",
          display: "inline-block",
          minHeight: "320px",
          margin: "1rem",
          justifySelf: "center",
          width: "60vw",
        }}
      >
        <div className="w-full flex flex-row justify-between p-5">
          <div>Connect wallet</div>
          <div>
            <img src={Xmark} alt='xmark' />
          </div>
        </div>
        <div className="w-full border-t  border-modal-grey"></div>
        <div className="flex flex-col p-4">
          <p>Choose your prefered wallet</p>
          <div className="py-3 px-5 flex flex-row justify-between bg-modal-bg rounded-xl border-2 border-modal-grey mb-3 mt-4">
            <div className="flex flex-row items-center">
              <img src={Meta} alt='meta' />
              <p className="ml-1">Metamask</p>
            </div>
            <div>
              <img src={Forward} alt='forward' />
            </div>
          </div>
          <div className="py-3 px-5 flex flex-row justify-between bg-modal-bg rounded-xl border-2 border-modal-grey">
            <div className="flex flex-row items-center">
              <img src={WalletC} alt='wallet' />
              <p className="ml-1">WalletConnect</p>
            </div>
            <div>
              <img src={Forward} alt='forward2' />
            </div>
          </div>
        </div>
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default Modal;
