import React from 'react';
import './modal.css';

const Modal = () => {
  return (
    <div className='services__modal'>
      <div className='services__modal-content'>
        <i className='uil uil-times services__modal-close'></i>

        <h3 className='services__modal-title'>title</h3>
        <p className='services__modal-description'>Description</p>
      </div>
    </div>
  );
};

export default Modal;
