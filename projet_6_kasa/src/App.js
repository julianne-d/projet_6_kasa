import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from './housing.json';
import About from "./pages/About.page";
import HomePage from "./pages/Home.page";
import Housing from "./pages/Housing.page";
import Error from "./components/Error.component";
// import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/housing/:id' element={<Housing />}/>
        <Route path="*" element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
