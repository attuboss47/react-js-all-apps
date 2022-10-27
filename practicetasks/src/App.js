import {BrowserRouter,Routes,Route} from "react-router-dom"
import {Home} from "./components/Home"
import {NavLink} from "./components/NavLink"
import {Support} from "./components/Support"
import {Help} from "./components/Help"
import {ProductList} from "./components/ProductList"
import{ProList} from "./components/ProList"
// import {}

function App() {
  return (
    <div>
      <BrowserRouter>
      <NavLink/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/products" element={<ProductList/>} />
      <Route path="/product" element={<ProList/>}/>
      <Route path="/support" element={<Support/>} />
      <Route path="/help" element={<Help/>} />
      </Routes>
      </BrowserRouter>           
    </div>
  );
}

export default App;
