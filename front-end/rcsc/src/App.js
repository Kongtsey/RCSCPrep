import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import userDashboard from "./pages/UserDashboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={userDashboard} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
