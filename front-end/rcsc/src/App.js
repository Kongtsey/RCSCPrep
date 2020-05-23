import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import Login from "./pages/Login";
import UserDashboard from "./pages/UserDashboard";
import PracticeMath from "./pages/mathPractice";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={UserDashboard} />
        <Route exact path='/userLogin' component={Login} />
        <Route exact path='/math_practice' component={PracticeMath} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
