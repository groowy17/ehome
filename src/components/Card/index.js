import React, { Component } from 'react';
import './Card.scss';
import Modal from '../../components/Modal';

class Card extends Component {
  state = {
    isOpen: false
  };

  handleModal = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    return (
      <>
        <div className="card" onClick={this.handleModal} />
        <Modal isOpen={this.state.isOpen} handleModal={this.handleModal} />
      </>
    );
  }
}

export default Card;
