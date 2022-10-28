import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./components/common.css"
import {Nav} from "./components/Nav"
import {Home} from "./components/Home"
import { CustomerList } from "./components/CustomerList";
import {ProductList} from "./components/ProductList"
import {UseRef} from "./components/UseRef"
import {Greet} from "./components/Greet"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
      <Routes>
        <Route path="/home" element={<Home/>}/>
        <Route path="/customer" element={<CustomerList/>}/>
        <Route path="/products" element={<ProductList/>}/>
        <Route path="/video" element={<UseRef/>}/>
        <Route path="/greet" element={<Greet/>} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
