import React, { Component } from 'react';
import './Navbar.scss';
import { ReactComponent as IconList } from './icons/icon_list.svg';
import SideMenu from '../../components/SideMenu';

class Navbar extends Component {
  state = {
    isOpen: false
  };

  handleSideMenu = event => {
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
          <div className="nav-sidebar">
            <div className="nav-sidebar__icon">
              <a href="/#" onClick={this.handleSideMenu}>
                <IconList />
              </a>
            </div>
            <SideMenu
              isOpen={this.state.isOpen}
              handleSideMenu={this.handleSideMenu}
            />
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
