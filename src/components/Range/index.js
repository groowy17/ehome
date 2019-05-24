import React, { Component } from 'react';
import './Range.scss';
import Tabs from '../../components/Tabs';

class Range extends Component {
  options = [
    {
      id: 1,
      name: 'Вручную'
    },
    {
      id: 2,
      name: 'Холодно'
    },
    {
      id: 3,
      name: 'Тепло'
    },
    {
      id: 4,
      name: 'Жарко'
    }
  ];
  render() {
    return (
      <div className="range">
        <div className="range-filter">
          <Tabs options={this.options} />
        </div>
        <div className="range-box">
          <input
            type="range"
            className={
              'range-input ' +
              (this.props.type === 'light' ? 'range-input_light' : '')
            }
            min="0"
            max="100"
            step="1"
          />
        </div>
      </div>
    );
  }
}

export default Range;
