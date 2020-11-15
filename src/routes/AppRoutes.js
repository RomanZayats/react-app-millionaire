import React, { memo } from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import WelcomePage from '../pages/GreetingsPages/WelcomePage'
import GamePage from '../pages/GamePage/GamePage'
import ResultsPage from '../pages/GreetingsPages/ResultsPage'
import Page404 from '../pages/Page404/Page404'

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome"/>
      <Route exact path='/welcome' component={WelcomePage}/>
      <Route exact path='/game' component={GamePage}/>
      <Route exact path='/results' component={ResultsPage}/>
      <Route path="*" component={Page404}/>
    </Switch>
  )
}

export default memo(AppRoutes)