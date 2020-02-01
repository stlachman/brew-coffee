import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Landing from "./components/Landing";
import Recipes from "./components/Recipes";
import Theme from "./theme";

function App() {
  return (
    <Router>
      <Theme>
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
      </Theme>
    </Router>
  );
}

export default App;
