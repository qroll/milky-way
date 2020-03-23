import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Layout from "./pages/Layout";
import Main from "./pages/Main";
import Login from "./pages/Login";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/" exact>
            <Main />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
