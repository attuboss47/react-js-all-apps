import {Project}from "./components/Project"
import{Skillset}from "./components/SkillSet"
import "./components/common.css";
import{Department}from"./components/Department"
import{Roles} from "./components/Roles"
import{Services} from "./components/Services"
import {Platform}from "./components/Platform"

function App() {
  return (
    <div className="container">
   <h2>parant home</h2>
   <Department/>
   <Services/>
   <Platform/>
   <Roles/>
   <Project/>
   <Skillset/>
  </div>
  );
}

export default App;
