import React, { Component } from 'react';
import './Tabs.scss';

class Tabs extends Component {
  render() {
    const options = this.props.options;

    return (
      <div className="tabs">
        <ul className="tabs-list">
          {options.map(option => {
            return (
              <li key={option.id} className="tabs-list__item">
                <a
                  className={
                    'tabs-list__link ' +
                    (option.id === 1 ? 'tabs-list__link_active' : '')
                  }
                  href="/#"
                >
                  {option.name}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Tabs;
