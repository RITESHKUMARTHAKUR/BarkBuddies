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
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Mate from './components/MateComponent/Mate';
import Store from './components/StoreComponent/Store';
import User from './components/UserProfileComponent/User';
import Upload from './components/UploadComponent/Upload';


function App() { 
  
    return (
    <>
      <BrowserRouter>
          {window.location.pathname != "/" && window.location.pathname != "/Chat" ? <Navbar/> :  null }
        <Routes>
          <Route path="/" element={<SignUp />}></Route>
          <Route path="/Home" element={<Home />}></Route>
          {<Route path="/login" element={<Login/>}></Route> }
          <Route path="/Adopt" element={<Adopt />}></Route>
          <Route path="/Chat" element={<Chat />}></Route>
          <Route path="/domgiprofile" element={<DomgiProfile />}></Route>
          <Route path="/mate" element={<Mate />}></Route>
          <Route path="/store" element={<Store />}></Route>
          <Route path="/user" element={<User />}></Route>
          <Route path="/upload" element={<Upload />}></Route>

        </Routes>
        {window.location.pathname != "/"  && window.location.pathname != "/Chat" ? <Footer /> : null }
      </BrowserRouter>
    </>
  );
}

export default App;
