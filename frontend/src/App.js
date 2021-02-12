import React from "react";
import {
  BrowserRouter as Router,
  Route,
  Redirect,
  Switch,
} from "react-router-dom";
import { AnimatePresence } from "framer-motion";
/* components */
import Sidebar from "./components/sidebar/Sidebar";
import Navbar from "./components/navbar/Navbar";
import About from "./components/about/About";
/* import Resume from "./components/resume/Resume"; */
import Projects from "./components/projects/Projects";

function App() {
  return (
    <Router>
      <div className="App">
        <div className="container app__container">
          <div className="row app__row">
            <div className="col-lg-3">
              <Sidebar />
            </div>
            <div className="col-lg-9 app__main-content">
              <Navbar />
              <AnimatePresence>
                <Switch>
                  <Route exact path="/">
                    <About />
                  </Route>
                  {/* <Route path="/resume">
                    <Resume />
                  </Route> */}
                  <Route path="/projects" component={Projects} />
                  <Route>
                    <Redirect to="/" />
                  </Route>
                </Switch>
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
