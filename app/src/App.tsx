import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Profile from "./pages/Profile";

import Session from "./pages/UserContext";

function App() {
  return (
    <Session>
      <Layout>
        <Router>
          <Switch>
            <Route path="/" exact>
              <Main />
            </Route>
            <Route path="/login" exact>
              <Login />
            </Route>
            <Route path="/main" exact>
              <Profile />
            </Route>
          </Switch>
        </Router>
      </Layout>
    </Session>
  );
}

export default App;
