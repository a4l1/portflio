



import React, { useState } from "react";
import "../Modal/Modal.css";

// function OpenModal(){
//   setModal(!modal)
// }

const Modal = ({ modal, setModal }) => {
  return (
    <div className= "Modal">
      {modal && (
        <div className="modal">
          <div className="overlay">
            <div className="modal-content">
              <h2>hello</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eligendi debitis impedit qui cum, ad nihil placeat sunt perferendis voluptate excepturi? Dolorum obcaecati vero maiores, dolor deserunt eius sit, consequuntur recusandae corporis suscipit veritatis perferendis et provident officia deleniti doloribus? Mollitia neque eum esse accusantium sint tempore sunt voluptatibus alias!</p>
              
          <button 
          onClick={  () => setModal(false) }
          // onClick={OpenModal}
          className="close-modal">close</button>   
            </div>
          </div>

        </div>
      )}
    </div>
  );
};

export default Modal;
