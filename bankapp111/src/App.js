import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./components/common.css"
import {Home} from "./components/Home"
import {Nav} from "./components/Nav"
import { Banking } from "./components/Banking/Banking"
import {Card} from "./components/Card/Card"
import {Loan} from "./components/Loans/Loan"
import {Support} from "./components/Support/Support"
import {Registration} from "./components/Banking/Registration"


function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/banking" element={<Banking/>}/>
        <Route path="/cards" element={<Card/>}/>
        <Route path="/loans" element={<Loan/>}/>
        <Route path="/support" element={<Support/>}/>
        <Route path="/regitration" element={<Registration/>}/>
      </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
