import {BrowserRouter,Routes,Route} from "react-router-dom"

import { Nav } from "./components/Nav"
import {ProductList} from "./components/ProductList"
import  "./components/common.css"
function App() {
  return (
    <div>
      <BrowserRouter>
      <Nav/>
      <Routes>
      <Route path="product list" element={<ProductList/>}/>



      </Routes>
      </BrowserRouter>
     
    </div>
  );
}

export default App;
