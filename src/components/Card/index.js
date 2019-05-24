import React, { Component } from 'react';
import './Card.scss';
import Modal from '../../components/Modal';
import { ReactComponent as IconSchedule } from './icons/icon_scheduled.svg';
import { ReactComponent as IconSunActive } from './icons/icon_sun_2.svg';
import { ReactComponent as IconSun } from './icons/icon_sun.svg';
import { ReactComponent as IconTempActive } from './icons/icon_temperature_2.svg';
import { ReactComponent as IconTemp } from './icons/icon_temperature.svg';

class Card extends Component {
  state = {
    isOpen: false
  };

  handleModal = event => {
    event.preventDefault();
    this.setState({ isOpen: !this.state.isOpen });

    if (!this.state.isOpen) {
      document.body.classList = ['overlay'];
    } else {
      document.body.classList = [];
    }
  };

  render() {
    return (
      <>
        <a className="card" onClick={this.handleModal} href="/#">
          <div className="card__icon">
            {(() => {
              switch (this.props.type) {
                case 'time':
                  return <IconSchedule />;
                case 'temp':
                  return this.props.isActive ? (
                    <IconTempActive />
                  ) : (
                    <IconTemp />
                  );
                case 'light':
                  return this.props.isActive ? <IconSunActive /> : <IconSun />;
                default:
                  return null;
              }
            })()}
          </div>
          <div className="card__header">{this.props.name}</div>
          {this.props.sub && <div className="card__sub">{this.props.sub}</div>}
        </a>
        <Modal
          isOpen={this.state.isOpen}
          handleModal={this.handleModal}
          name={this.props.name}
          type={this.props.type}
        />
      </>
    );
  }
}

export default Card;
