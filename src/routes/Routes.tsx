import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import MainPage from '../pages/MainPage';
import DogDetails from '../pages/DogDetails';

const Routes: React.FC = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={MainPage} />
      <Route exact path="/edit/:id" component={DogDetails} />
    </Switch>
  </Router>
);

export default Routes;
