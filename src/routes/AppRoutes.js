import React, { memo } from "react";
import { Switch, Route, Redirect, BrowserRouter } from "react-router-dom";
import WelcomePage from "../pages/GreetingsPages/WelcomePage";
import GamePage from "../pages/GamePage/GamePage";
import ResultsPage from "../pages/GreetingsPages/ResultsPage";
import Page404 from "../pages/Page404/Page404";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Redirect exact from="/" to="/welcome" />
        <Route exact path="/welcome" component={WelcomePage} />
        <Route exact path="/game" component={GamePage} />
        <Route exact path="/results" component={ResultsPage} />
        <Route path="*" component={Page404} />
      </Switch>
    </BrowserRouter>
  );
};

export default memo(AppRoutes);
