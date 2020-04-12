import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import ProfilePage from "./pages/ProfilePage";

import Session from "./pages/UserContext";

function App() {
  return (
    <Session>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <MainPage />
            </Route>
            <Route path="/login" exact>
              <LoginPage />
            </Route>
            <Route path="/main" exact>
              <ProfilePage />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </Session>
  );
}

export default App;
