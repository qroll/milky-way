import React from "react";
import Layout from "./components/Layout";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./components/Main";

function App() {
  return (
    <Layout>
      <Router>
        <Switch>
          <Route path="/">
            <Main />
          </Route>
        </Switch>
      </Router>
    </Layout>
  );
}

export default App;
