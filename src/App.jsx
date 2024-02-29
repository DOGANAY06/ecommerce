import React from "react";
import Header from "./components/header/Header";
import CardBody from "./components/cards/CardBody";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import CardDetail from "./components/cardsDetail/CardDetail";

const App = () => {
  return (
    <Router>
      <div>
        <div className="body__container">
          <div className="nav">
            <Header />
          </div>
          <Routes>
            <Route path="/" element={<CardBody />} />
            <Route path="/detail/:id" element={<CardDetail />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
