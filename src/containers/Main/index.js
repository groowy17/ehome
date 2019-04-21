import React, { Component } from 'react';
import './Main.scss';

class Main extends Component {
  render() {
    return (
      <div className="main">
        <div className="main-container">
          <div className="main-grid">
            <div className="main-grid__left">
              <h2 className="main-h2">Главное</h2>
              <div className="main-welcome">
                <div className="main-welcome__info">
                  <h1 className="main-h1">Привет, Геннадий!</h1>
                  <p className="main-welcome__text">
                    Двери и окна закрыты, сигнализация включена.
                  </p>
                </div>
                <div className="main-welcome__right" />
              </div>
            </div>
            <div className="main-grid__right" />
            <div className="main-grid__center" />
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
