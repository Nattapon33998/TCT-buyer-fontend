import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import ProductDetail from "./components/ProductDetail";
import { Route, Routes } from "react-router-dom";

import PlayGround from "./components/PlayGround";

const App: React.FC = () => {
  return (
    <div className="App flex min-h-screen flex-col overflow-hidden ">
      <div className="sticky top-0 z-50">
        <Header />
      </div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/" element={<ProductDetail />} />
        <Route path="/test" element={<PlayGround />} />
      </Routes>
    </div>
  );
};

export default App;
