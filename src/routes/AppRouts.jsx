import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Login from "../pages/login/Login"

const AppRouts = () => {
  return (
    <Switch>
      <Route exact path="/" component={Login} />
      
    </Switch>
  );
}

export default AppRouts
