import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import * as pages from './pages';

const Routes = () => {
  return (
    <Router>
      <Switch>
        <Route path="/">{pages.RootPage}</Route>
        <Route path="/login">{pages.LoginPage}</Route>
      </Switch>
    </Router>
  );
};

export { Routes };
