import React from 'react'
import { ReactDOM } from 'react-dom'
const Modal = () => {
  return ReactDOM.createPortal (
    <div>Modal
        
    </div>, document.getElementById('modal-root')
  )
}

export default Modal