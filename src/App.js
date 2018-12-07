import React from "react";
import { Header } from "./components/Header";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { HomePage } from "./components/HomePage";
import { SitePage } from "./components/SitePage";
const App = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact component={HomePage} />
      <Route path="/site" exact component={SitePage} />
    </div>
  </Router>
);

export default App;
