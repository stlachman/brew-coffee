import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import Recipes from "./components/Recipes";

function App() {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/">
            <Landing />
          </Route>
        </Switch>
      </Layout>
    </Router>
  );
}

export default App;
