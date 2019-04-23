import React, { Component } from 'react';
import Welcome from '../../containers/Welcome';
import Card from '../../components/Card';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <div className="main-grid">
            <div className="main-grid__left">
              <h2 className="main-h2">Главное</h2>
              <Welcome />
            </div>
            <div className="main-grid__right">
              <h2 className="main-h2">Избранные сценарии</h2>
              <div className="main-cards">
                <Card />
              </div>
            </div>
            <div className="main-grid__center">
              <h2 className="main-h2">Избранные устройства</h2>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
