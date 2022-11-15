import React, { useContext, useState, useMemo } from 'react';
//import logo from './logo.svg';
import './App.css';
// importing all pages and components
import AllData from './Components/alldata';
//import Account from './Components/account';
import CreateAccount from './Components/createaccount';
import Deposit from './Components/deposit';
import Home from './Components/home';
import NavBar from './Components/navbar';
import Withdraw from './Components/withdraw';
import Login from './Components/login';
import { UserContext } from "./Components/context/context";

import {HashRouter as Router, Routes, Route} from 'react-router-dom';

//import { Switch, Link } from "react-router-dom";





function App() {
  //const ctx = React.useContext(UserContext);
  const [user, setUser] = useState({name:"Peter Parker", email:"peter@mit.edu",  password:"Passcode321", balance:100});

  const value = useMemo(() => ({ user, setUser }), [user, setUser]);
  


  return (
    <Router>
        <UserContext.Provider value={value}>
          <NavBar/>
          <div className="content">
          <Routes>
            <Route exact path="/"           element={<Home/>} />
            <Route path="/alldata/"         element={<AllData/>} />          
            <Route path="/createaccount/"   element={<CreateAccount/>} />
            <Route path="/deposit/"         element={<Deposit/>} />
            <Route path="/withdraw/"        element={<Withdraw/>} />
            <Route path="/login/"           element={<Login/>} />
          </Routes>
          </div>
        </UserContext.Provider>
    </Router>
  ); 
  }

export default App;
