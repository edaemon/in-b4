import React, { Component } from 'react';
import styled from 'styled-components';
import './App.css';

import MessageForm from './components/MessageForm';
import Header from './components/Header';

const AppWrapper = styled.div`
  margin: auto;
  max-width: 500px;
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
