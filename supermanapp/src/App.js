import {BrowserRouter,Routes,Route} from "react-router-dom"
import "./components/commen.css"
import {Nav} from "./components/Nav"
import {Home} from "./components/Home"
import {CustomerList} from "./components/CustomerList"
import {UserList} from "./components/UserList"

function App() {
  return (
    <div className="main">
      
      <BrowserRouter>
      <Nav/>
        <Routes>
         <Route path="/home" element={<Home/>}/>
         <Route path="/customer" element={<CustomerList/>} />
         <Route path="/users" element={<UserList/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
