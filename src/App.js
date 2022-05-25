import { history } from './common/history';
import {Router, Switch} from "react-router-dom"
import { HOME_ROUTES, LOGIN_ROUTES } from './contants/Index';
import HomeLayoutRoute from './common/Layout/HomeLayout/HomeLayout';
import LoginLayoutRoute from './common/Layout/LoginLayout/LoginLayout';
import React from 'react';

const renderHomePageRoutes = () => {
  let xhtml = null;
  xhtml = HOME_ROUTES.map((route) => {
    return (
      <HomeLayoutRoute
      key={route.path}
      path={route.path}
      name={route.name}
      exact={route.exact}
      component={route.component}
      />
    );
  });
  return xhtml;
};
const renderLoginPageRoutes = () => {
  let xhtml = null;
  xhtml = LOGIN_ROUTES.map((route) => {
    return (
      <LoginLayoutRoute
      key={route.path}
      path={route.path}
      name={route.name}
      exact={route.exact}
      component={route.component}
      />
    );
  });
  return xhtml;
};

function App() {
  return (
    <Router history={history}>
      <Switch>
        {renderHomePageRoutes()}
        {renderLoginPageRoutes()}
      </Switch>
    </Router>
  );
}

export default App;
