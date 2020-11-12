import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import Page404 from '../components/Page404/Page404';
import WelcomePage from '../pages/WelcomePage';
import ResultsPage from '../pages/ResultsPage';

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome" component={WelcomePage} />
      <Route exact path='/welcome' component={WelcomePage} />
      <Route exact path='/game' />
      <Route exact path='/results' component={ResultsPage} />
      <Route path="*" component={Page404} />
    </Switch>
  )
}

export default AppRoutes;