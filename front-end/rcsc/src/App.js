import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homePage";
import UserDashboard from "./pages/UserDashboard";
import PracticeMath from "./pages/mathPractice";
import PracticeEnglish from "./pages/englishPractice";
import MathLoader from "./pages/mathStatsPage";
import EnglishLoader from "./pages/englishStatsPage";
import TutorialVideo from "./pages/tutorialsPage/tutorialVideo";
import ExamPractice from "./pages/examPractice.js";

import Forum from "./pages/forum";
import AboutPage from "./pages/aboutPage";
import FeedbackPage from "./pages/feedbackPage/feedbackPage";
import ExamPieChartPage from "./pages/examPieChartPage";
import AllTopicsTutorials from "./pages/tutorialsPage/allTopicsTutorials";
import { AuthProvider } from "./components/authentication";
import PrivateRoute from "./components/PrivateRoute";
import ComingSoon from "./pages/comingSoon";
import Donate from "./pages/donate/donate";
import DonateAuthenticated from "./pages/donate/donateAuthenticated";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route exact path='/about_and_contact' component={AboutPage} />
          <PrivateRoute exact path='/user' component={UserDashboard} />
          <PrivateRoute exact path='/math_practice' component={PracticeMath} />
          <PrivateRoute exact path='/english_practice' component={PracticeEnglish} />
          <PrivateRoute exact path='/math_stats_page' component={MathLoader} />
          <PrivateRoute exact path='/english_stats_page' component={EnglishLoader} />
          <PrivateRoute exact path='/exam' component={ExamPractice} />
          <PrivateRoute exact path='/forum' component={Forum} />
          <PrivateRoute exact path='/feedback' component={FeedbackPage} />
          <PrivateRoute exact path='/examPracticePage' component={ExamPieChartPage} />
          <PrivateRoute exact path='/coming_soon' component={ComingSoon} />
          <PrivateRoute exact path='/donate_to_us' component={DonateAuthenticated} />
          <Route exact path='/donate' component={Donate} />
          {/*<------------------ TUTS PATHS --------------------->*/}
          <PrivateRoute exact path='/tutorial_videos' component={AllTopicsTutorials} />
          <PrivateRoute exact path='/tutorial_videos/solving_patterns' component={TutorialVideo} />
          <PrivateRoute exact path='/tutorial_videos/simple_algebra' component={TutorialVideo} />
          <PrivateRoute exact path='/tutorial_videos/solving_comparisons' component={TutorialVideo} />
          {/*<------------------ TUTS PATHS --------------------->*/}
        </Switch>
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
