import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Search from "./Search";
import Header from "./Header";
import MenuDetail from "./MenuDetail";

function Pages() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/search/:type" element={<Search />} />
        <Route path="/menuDetail/:id" element={<MenuDetail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Pages;
