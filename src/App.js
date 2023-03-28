import "./App.css";
import Home from "./components/HomeComponents/Home";
import Login from "./components/RegisterComponents/Login";
import Navbar from "./components/NavbarComponent/Navbar";
import SignUp from "./components/RegisterComponents/SignUp";
import Adopt from "./components/AdoptComponent/Adopt";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() { 
  
    return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/Login" element={<Login />}></Route>
          <Route path="/SignUp" element={<SignUp />}></Route>
          <Route path="/Adopt" element={<Adopt />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
