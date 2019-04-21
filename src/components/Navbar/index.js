import React, { Component } from 'react';
import './Navbar.scss';

class Navbar extends Component {
  render() {
    return (
      <nav className="nav">
        <div className="nav-wrapper">
          <div className="nav-brand">
            <span className="nav-brand__letter">E</span>-Home
          </div>
          <div className="nav-menu">
            <a href="/#" className="nav-menu__link nav-menu__link_active">
              Сводка
            </a>
            <a href="/#" className="nav-menu__link">
              Устройства
            </a>
            <a href="/#" className="nav-menu__link">
              Сценарии
            </a>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
