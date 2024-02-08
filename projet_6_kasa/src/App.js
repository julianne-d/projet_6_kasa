import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
// import data from './housing.json';
import About from "./pages/About.page";
import HomePage from "./pages/Home.page";
import Housing from "./pages/Housing.page";
// import { useState } from "react";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about_us' element={<About />}/>
        <Route path='/housing' element={<Housing />}/>
        <Route path='*' element={<Navigate to='/' replace={false} />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
