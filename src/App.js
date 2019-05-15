import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
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
        <Switch>
          <Route exact path="/" component={MessageForm} />
          <Route path="/:id" component={MessageDisplay} />
          <Redirect to="/" />
        </Switch>
      </AppWrapper>
    );
  }
}

export default App;
