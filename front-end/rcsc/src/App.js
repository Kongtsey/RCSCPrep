import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import UserDashboard from "./pages/UserDashboard";
import PracticeMath from "./pages/mathPractice";
import {AuthProvider} from "./components/authentication";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <PrivateRoute exact path='/user' component={UserDashboard} />
            <Route exact path='/math_practice' component={PracticeMath} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  );
}
export default App;
