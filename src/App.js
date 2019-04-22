import React, { Component } from 'react';
import './App.css';

import MessageForm from './components/MessageForm';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <MessageForm />
      </div>
    );
  }
}

export default App;
