// import React from "react";
import {Home} from "./Components/Home"
import { Nav } from "./Components/Nav";
import {Cards} from "./Components/Cards/Cards"
import { Banking } from "./Components/Banking/Banking";
import { Support } from "./Components/Support";
import {Registration} from "./Components/Banking/Registration"
import "./Components/Common.css"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Loans from "./Components/Loans/Loans";

function App() {
  return (
    <div className="main">
  <BrowserRouter>
  <Nav/>
  <Routes>
    <Route path="/" element={<Home/>} />
    <Route path="/banking" element={<Banking/>} />
    <Route path="/cards" element={<Cards/>} />
    <Route path="/loans" element={<Loans/>} />
    <Route path="/support" element={<Support/>} />
    {/* <Route path="/register" element={<Registration/>} /> */}
    <Route path="/register" element={<Registration/>} />
    
  </Routes>
  </BrowserRouter>
  
   </div>
  );
}

export default App;
 