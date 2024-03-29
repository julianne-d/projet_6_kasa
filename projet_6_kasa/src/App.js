import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import About from "./pages/About/About.page";
import HomePage from "./pages/Home/Home.page";
import Housing from "./pages/Housing/Housing.page";
import Error from "./components/Error/Error.component";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/housing/:id' element={<Housing />}/>
        <Route path='/*' element={<Navigate to="/404" />} />
        <Route path='/404' element={<Error />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
