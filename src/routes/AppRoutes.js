import React from 'react'
import { Switch, Route, Redirect } from 'react-router-dom'
import Wrapper from '../components/Wrapper/Wrapper'
import Page404 from '../components/Page404/Page404'

const AppRoutes = () => {
  return (
    <Switch>
      <Redirect exact from="/" to="/welcome" component={Wrapper}/>
      <Route exact path='/welcome' component={Wrapper}/>
      <Route exact path='/game'/>
      <Route exact path='/goodbye'/>
      <Route path="*" component={Page404}/>
    </Switch>
  )
}

export default AppRoutes