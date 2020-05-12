import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Curriculum from "./components/Curriculum";
import Policy from "./components/Policy";
import Extra_Activities from "./components/Extra_Activities";
import Fee_Policy from "./components/Fee_Policy";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

import "./App.css";
function App() {
  return (
    <container>
    <Router>
      <React.Fragment>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/About" component={About} />
          <Route path="/Curriculum" component={Curriculum} />
          <Route path="/Policy" component={Policy} />
          <Route path="/Extra_Activities" component={Extra_Activities} />
          <Route path="/Fee_Policy" component={Fee_Policy} />
          <Route path="/Contact" component={Contact} />
          
        </Switch>
        <Footer />
      </React.Fragment>
    </Router>
    </container>
  );
}
export default App;
