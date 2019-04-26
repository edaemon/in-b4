import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import MessageForm from './components/MessageForm';
import Header from './components/Header';

const AppWrapper = styled.div`
  margin: auto;
  font-family: Arial, Helvetica, sans-serif;
  max-width: 50%;
  @media (max-width: 700px) {
    max-width: 90%;
  }
`;

class App extends Component {
  render() {
    return (
      <AppWrapper>
        <Header />
        <MessageForm />
      </AppWrapper>
    );
  }
}

export default App;
