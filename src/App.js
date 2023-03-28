
import './App.css';
import Login from './components/RegisterComponents/Login';
import Navbar from './components/NavbarComponent/Navbar';
import SignUp from './components/RegisterComponents/SignUp';
import Adopt from './components/AdoptComponent/Adopt'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import {db} from './components/database/firebase-config";
import { useState } from 'react';
import { doc, getDocs, collection} from 'firebase/firestore';

function App() { 
  
    return (
    <>
    
    <BrowserRouter>

    <Navbar/>
    <Routes>
    <Route  path="/Login"element={<Login />}></Route>
    <Route  path="/SignUp"element={<SignUp />}></Route>
    <Route  path="/Adopt"element={<Adopt />}></Route>
    

    </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;
