import {BrowserRouter,Routes,Route} from "react-router-dom"


import "./components/common.css"
import {Home} from "./components/Home"
import {Nav} from "./components/Nav"
import {ProductList} from "./components/ProductList"




function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Nav/>
        <Routes>
          <Route path="home" element={<Home/>}/>
          <Route path="productlist" element={<ProductList/>}/>
        </Routes>
      </BrowserRouter>
   
    </div>
  );
}

export default App;
