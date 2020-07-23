import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import About from '../pages/About';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/about" component={About} />
    </Switch>
  </Router>
);

export default Routes;
