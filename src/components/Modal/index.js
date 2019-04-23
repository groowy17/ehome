import React, { Component } from 'react';
import './Modal.scss';
import Portal from '../../components/Portal';

class Modal extends Component {
  render() {
    const isOpen = this.props.isOpen;
    const handleModal = this.props.handleModal;

    return (
      <>
        {isOpen && (
          <Portal>
            <div className="modal-overlay" onClick={handleModal} />
          </Portal>
        )}
      </>
    );
  }
}

export default Modal;
