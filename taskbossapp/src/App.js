import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {Nav} from "./components/Nav"
import {AboutUs} from "./components/AboutUs"
import {Cart} from "./components/Cart"
import {Help} from "./components/Help"
import {Support} from "./components/Support"
import {CustomerList} from "./components/CustomerList"
import { ProductList } from "./components/ProductList"
import "./components/Common.css"


function App() {
  return (
    <div className="main">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/home" element={<Home/>} />
        <Route path="/customer" element={<CustomerList/>} />
        <Route path="/aboutus" element={<AboutUs/>} />
        <Route path="/cart" element={<Cart/>}/>
        <Route path="/help" element={<Help/>} />
        <Route path="/support" element={<Support/>}/>
        <Route path="/product" element={< ProductList />}/>
      </Routes>
      </BrowserRouter>  
    </div>
  );
}

export default App;
