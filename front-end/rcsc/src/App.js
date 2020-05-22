import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import readMathData from "./components/readMathData";
import Login from "./pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/user' component={readMathData} />
        <Route exact path='/userLogin' component={Login} />
      </Switch>
    </BrowserRouter>
  );
}
export default App;
