import React, { Component } from 'react';
import Portal from '../../components/Portal';
import './SideMenu.scss';

class SideMenu extends Component {
  render() {
    const isOpen = this.props.isOpen;
    const handleSideMenu = this.props.handleSideMenu;

    return (
      <>
        {isOpen && (
          <Portal>
            <div className="side-menu__overlay" onClick={handleSideMenu}>
              <div className="side-menu__container">
                <div className="side-menu__menu">
                  <a
                    href="/#"
                    className="side-menu__link side-menu__link_active"
                  >
                    Сводка
                  </a>
                  <a href="/#" className="side-menu__link">
                    Устройства
                  </a>
                  <a href="/#" className="side-menu__link">
                    Сценарии
                  </a>
                </div>
              </div>
            </div>
          </Portal>
        )}
      </>
    );
  }
}

export default SideMenu;
