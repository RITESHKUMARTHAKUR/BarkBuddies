


import DomgiProfile from './components/DomgiProfileComponent/DomgiProfile';
import "./App.css";
import Home from "./components/HomeComponents/Home";
import Login from "./components/RegisterComponents/Login";
import Navbar from "./components/NavbarComponent/Navbar";
import SignUp from "./components/RegisterComponents/SignUp";
import Logout from "./logout";
import Adopt from "./components/AdoptComponent/Adopt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  
    return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          {<Route path="/login" element={<Login/>}></Route> }
          <Route path="/Adopt" element={<Adopt />}></Route>
          <Route path="/domgiprofile" element={<DomgiProfile />}></Route>

        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
