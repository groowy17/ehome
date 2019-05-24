import React, { Component } from 'react';
import Card from '../../components/Card';
import './Welcome.scss';
import cards from '../../utils/cards';

class Welcome extends Component {
  render() {
    const welcomeCards = cards.filter(card => {
      return card.location === 'welcome';
    });

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
          {welcomeCards.map(card => {
            return (
              <Card
                key={card.id}
                name={card.name}
                sub={card.sub}
                isActive={card.active}
                type={card.type}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Welcome;
