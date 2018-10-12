import React, { Component } from 'react';
import { BrowserRouter, Switch, Route} from 'react-router-dom'

import Header from './components/Header';

import Home from './scenes/Home';
import Bio from './scenes/Bio';
import JoyOfPlay from './scenes/JoyOfPlay';
import PortfolioRoot from './scenes/PortfolioRoot';
import PortfolioItem from './scenes/PortfolioItem';
import NotFound from './scenes/NotFound';

import './App.scss';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="app-container">
          <Header/>
          <Switch>
            <Route
              path="/"
              exact={true}
              component={Home}
            />
            <Route
              path="/bio"
              exact={true}
              component={Bio}
            />
            <Route
              path="/play"
              exact={true}
              component={JoyOfPlay}
            />
            <Route
              path="/portfolio"
              exact={true}
              component={PortfolioRoot}
            />
            <Route
              path="/portfolio/:project"
              exact={true}
              component={PortfolioItem}
            />
            <Route
              path="*"
              exact={true}
              component={NotFound}
            />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
