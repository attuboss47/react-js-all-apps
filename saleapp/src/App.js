
 import {BrowserRouter,Routes,Route} from "react-router-dom"
 import {Home}from "./components/Home"
 import {Support} from "./components/Support"
 import {Nav} from "./components/Nav"
 import "./components/common.css"
 import {CustomerList} from "./components/CustomerList"
 import {Greet} from "./components/Greet"
 import {UserList} from "./Hooks/UserList"
 import {ProductList} from "./components/ProductList"
 import { AllUsersList } from "./components/AllUsersList"
 import {DeviceList} from "./components/DeviceList"
 import {StudentList} from "./components/StudentList"
 import {EmpList} from "./components/EmpList"
 import {HookRef} from "./Hooks/HookRef"
 import {UseMemo} from "./Hooks/UseMemo"
 import {HookReduce} from "./components/HookReduce"
 import { ContextParent } from "./Hooks/Context Api/ContexParent"
 import {ContextParent2} from "./Hooks/context api1/ContextParent2"
 import {ContextApi} from "./Hooks/context api1/ContextApi"


//  import {BankDashboard} from "./Hooks/ContextBank/BankDashboard"
 import { ContextBank } from "./Hooks/ContextBank/ContextBank";
 import {Counter} from "./components/Counter"
import {ProductList1} from"./components/ProductList1"
function App() {
  return (
    <div className="main">
      <ContextBank/> 
      
       <BrowserRouter>
      <Nav/>
      <br/>
      <br/> 
       <br/> 
     <Routes>
       <Route path="/"  element={Home}/>
       <Route path="/home" element={<Home/>} />
       <Route path="/customer" element={<CustomerList />}/>
       <Route path="/help" element={<Support/>} />
       <Route path="/user list" element={<UserList/>} />
       <Route path="/products" element={<ProductList/>}/>
       <Route path="/student" element={<StudentList/>}/>
       <Route path="/support" element={<Support/>} />
       <Route  path="/allusers" element={<AllUsersList/>} />
       <Route  path="/device" element={<DeviceList/>} />
       <Route  path="/employee" element={<EmpList/>} />
        <Route  path="/abcd" element={   <HookRef/>} /> 
     </Routes>
      <Route path="greet" element={<Greet/>} />
     </BrowserRouter>

      <UseMemo/>
      <HookReduce/> 
      <ContextParent/>
      <ContextParent2/>
       
       <ContextApi/> 
        <Counter/> 
        <Greet/> 
       <ProductList1/>




    </div>
  );
}

export default App;
