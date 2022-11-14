import React from "react";
import "./styles/App.css";
import Header from "./components/Header";
import Home from "./components/Home";
import { Route, Routes, useLocation } from "react-router-dom";

const App: React.FC = () => {
  return (
    <div className="App relative flex min-h-screen flex-col overflow-hidden">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/product/" element={<ProductDetail />} />
        <Route path="/mint/" element={<MintProduct />} />
        <Route path="/farm&farmer/" element={<FarmAndFarmer />} /> */}
      </Routes>
    </div>
  );
};

export default App;
