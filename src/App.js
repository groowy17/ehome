import React, { Component } from 'react';
import './App.scss';
import Navbar from './components/Navbar';
import Main from './containers/Main';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Main />
      </div>
    );
  }
}

export default App;
