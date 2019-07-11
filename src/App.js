import React from "react";
import { Route, HashRouter as Router } from "react-router-dom";
import ImageUpload from "./screens/image-upload/index";
import Results from "./screens/results";
import "./App.css";

function App() {
  return (
    <Router>
      <div className="App">
        <main>
          <div className="section" id="index-banner">
            <div className="container">
              <div className="row">
                <div className="col s12 m12 xl12">
                  <Route path="/" component={ImageUpload} />
                  <Route path="/results" component={Results} />
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </Router>
  );
}

export default App;
