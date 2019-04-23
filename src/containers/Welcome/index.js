import React, { Component } from 'react';
import Card from '../../components/Card';
import './Welcome.scss';

class Welcome extends Component {
  render() {
    return (
      <div className="welcome">
        <div className="welcome-info">
          <h1 className="welcome-h1">Привет, Геннадий!</h1>
          <p className="welcome-text">
            Двери и окна закрыты, сигнализация включена.
          </p>
          <div className="welcome-conditions">
            <div className="welcome-conditions__item">
              <div className="welcome-conditions__item-name">Дома</div>
              <div className="welcome-conditions__item-temp">+23</div>
            </div>
            <div className="welcome-conditions__item">
              <div className="welcome-conditions__item-name">За окном</div>
              <div className="welcome-conditions__item-temp">+19</div>
            </div>
          </div>
        </div>
        <div className="welcome-right">
          <Card />
        </div>
      </div>
    );
  }
}

export default Welcome;
