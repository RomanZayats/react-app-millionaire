import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import WelcomePage from '../pages/WelcomePage';
import GamePage from '../pages/GamePage/GamePage';
import ResultsPage from '../pages/ResultsPage';
import Page404 from '../components/Page404/Page404';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome" />
      <Route exact path='/welcome' component={WelcomePage} />
      <Route exact path='/game' component={GamePage} />
      <Route exact path='/results' component={ResultsPage} />
      <Route path="*" component={Page404} />
    </Switch>
  )
}

export default AppRoutes;