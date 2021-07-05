import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App/App";
import Header from "./components/shared/Header/Header";

import Footer from "./components/shared/Footer/Footer";
import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.render(
  <div className="content">
    <Router>
      <Header />
      <main>
        <App />
      </main>
    </Router>

    <Footer />
  </div>,
  document.getElementById("root")
);
