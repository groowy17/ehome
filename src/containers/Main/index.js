import React, { Component } from 'react';
import Welcome from '../../containers/Welcome';
import Card from '../../components/Card';
import './Main.scss';
import cards from '../../utils/cards';

class Main extends Component {
  render() {
    const mainCards = cards.filter(card => {
      return card.location === 'cards';
    });

    const centerCards = cards.filter(card => {
      return card.location === 'center';
    });

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
                {mainCards.map(card => {
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
            <div className="main-grid__center">
              <h2 className="main-h2">Избранные устройства</h2>

              <div className="main-center">
                {/* <div className="main-center__wrapper"> */}
                {centerCards.map(card => {
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
                {/* </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Main;
