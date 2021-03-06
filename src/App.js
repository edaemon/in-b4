import React, { Component } from 'react';
import styled from 'styled-components';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';

import Header from './components/Header';
import Footer from './components/Footer';
import AboutPage from './components/AboutPage';
import Disclaimer from './components/Disclaimer';
import MessageForm from './components/MessageForm';
import MessageDisplay from './components/MessageDisplay';
import TermsAndConditions from './components/TermsAndConditions';

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
          <Route exact path="/about" component={AboutPage} />
          <Route exact path="/terms" component={TermsAndConditions} />
          <Route exact path="/disclaimer" component={Disclaimer} />
          <Route path="/:id" component={MessageDisplay} />
          <Redirect to="/" />
        </Switch>
        <Footer />
      </AppWrapper>
    );
  }
}

export default App;
