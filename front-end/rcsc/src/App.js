import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import UserDashboard from "./pages/UserDashboard";
import PracticeMath from "./pages/mathPractice";
import MathLoader from "./pages/mathStatsPage";
import EnglishLoader from "./pages/englishStatsPage"
import {AuthProvider} from "./components/authentication";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
      <AuthProvider>
        <BrowserRouter>
          <Switch>
            <Route exact path='/' component={HomePage} />
            <PrivateRoute exact path='/user' component={UserDashboard} />
            <PrivateRoute exact path='/math_practice' component={PracticeMath} />
            <PrivateRoute exact path='/math_stats_page' component={MathLoader} />
            <PrivateRoute exact path='/english_stats_page' component={EnglishLoader} />
          </Switch>
        </BrowserRouter>
      </AuthProvider>
  );
}
export default App;
