import React, { Component } from 'react';
import './Modal.scss';
import Portal from '../../components/Portal';
import Range from '../../components/Range';

class Modal extends Component {
  render() {
    const { isOpen, handleModal, name, type } = this.props;

    return (
      <>
        {isOpen && (
          <Portal>
            <div className="modal-overlay">
              <div className="modal-wrapper">
                <div className="modal-body">
                  <header className="modal-body__header">
                    <h2 className="modal-body__h2">{name}</h2>
                  </header>
                  <p className="modal-body__subheader">Включено</p>
                  <div className="modal-body__main">
                    <Range type={type} />
                  </div>
                </div>
                <div className="modal-footer">
                  <button
                    className="modal-footer__button modal-footer__button_accept"
                    onClick={handleModal}
                  >
                    Применить
                  </button>
                  <button
                    className="modal-footer__button modal-footer__button_cancel"
                    onClick={handleModal}
                  >
                    Закрыть
                  </button>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
}

export default Modal;
