
import './App.css';
import Login from './components/Login';
import Navbar from './components/Navbar';
import SignUp from './components/SignUp';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
    
    <BrowserRouter>
    <Navbar/>

    <Routes>
    <Route  path="/Login"element={<Login />}></Route>
    <Route  path="/SignUp"element={<SignUp />}></Route>

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
