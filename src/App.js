import DomgiProfile from './components/DomgiProfileComponent/DomgiProfile';
import "./App.css";
import Home from "./components/HomeComponents/Home";
import Login from "./components/RegisterComponents/Login";
import Navbar from "./components/NavbarComponent/Navbar";
import Chat from "./components/ChatComponent/Chat"
import SignUp from "./components/RegisterComponents/SignUp";
import Logout from "./logout";
import Footer from "./components/FooterComponent/Footer";
import Adopt from "./components/AdoptComponent/Adopt";
import { BrowserRouter, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Mate from './components/MateComponent/Mate';
import Store from './components/StoreComponent/Store';
import User from './components/UserProfileComponent/User';
import About from './components/AboutUsComponent/About';
import Upload from './components/UploadComponent/Upload';
import { useContext } from 'react';
import { AuthContext } from './Context/AuthContext';


function App() { 
  const {currentUser} = useContext(AuthContext)

  const ProtectedRoute = ({children}) => {
    if(!currentUser) {
      return <Navigate to="/" />
    }
    return children
  }
    return (
      <BrowserRouter>
      <Navbar>

      
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute> }></Route>
          <Route path="/login" element={<Login/>}></Route> 
          <Route path="/about" element={<About/>}></Route> 
          <Route path="/Adopt" element={<Adopt />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/domgiprofile" element={<DomgiProfile />}></Route>
          <Route path="/mate" element={<Mate />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/user" element={<ProtectedRoute><User /></ProtectedRoute> }></Route>
          <Route path="/upload" element={<Upload />}></Route>

        </Routes>
        </Navbar>
      </BrowserRouter>
  );
}

export default App;
