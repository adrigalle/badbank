import React, { useContext} from 'react';
import {Link} from "react-router-dom";

import { UserContext } from "./context/context";

function NavBar(){
    const { user, setUser } = useContext(UserContext);

return(
    <nav className="navbar navbar-expand-lg navbar-light bg-dark">
    <div className="container-fluid">
        <Link className="navbar-brand" to="/">
            <img src="BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img>
        </Link>
        <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="nav">
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/" title="Got to Home Page">Home</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/deposit/" title="Deposit money into fake bank account">Deposit</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/withdraw/" title="Withdraw money from fake bank account">Withdraw</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/alldata/" title="Check out all the fake data from fake users">All Data</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/CreateAccount" title="Create a fake bank account with this fake bank">Create Account</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/login/" title="Login to this fake bank">Login</Link>
                </li>
            </ul>
        </div>
    </div>
    </nav>
); 
}

export default NavBar;




{/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src="/src/images/BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img>
    </Link>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="nav">
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/" title="Got to Home Page">Home</Link>
            </li>
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/deposit/" title="Deposit money into fake bank account">Deposit</Link>
            </li>
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/withdraw/" title="Withdraw money from fake bank account">Withdraw</Link>
            </li>
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/alldata/" title="Check out all the fake data from fake users">All Data</Link>
            </li>
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/CreateAccount" title="Create a fake bank account with this fake bank">Create Account</Link>
            </li>
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/login/" title="Login to this fake bank">Login</Link>
            </li>
        </ul>
    </div>
</div>
</nav> */}


{/* <nav className="navbar navbar-expand-lg navbar-light bg-dark">
<div className="container-fluid">
    <Link className="navbar-brand" to="/">
        <img src="/src/images/BadBank-logo.png" alt="" width="100" className="d-inline-block align-text-top"></img>
    </Link>
    <button className="navbar-toggler navbar-dark" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
        
        {user ? (
            <ul className="nav">
            <li className="nav-item bg-nav">
                <Link className="nav-link" to="/login/" title="Login to this fake bank">Login</Link>
            </li>
            <button>Login</button>
            </ul>
        ): (
            <ul className="nav">
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/" title="Got to Home Page">Home</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/deposit/" title="Deposit money into fake bank account">Deposit</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/withdraw/" title="Withdraw money from fake bank account">Withdraw</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/alldata/" title="Check out all the fake data from fake users">All Data</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/CreateAccount" title="Create a fake bank account with this fake bank">Create Account</Link>
                </li>
                <li className="nav-item bg-nav">
                    <Link className="nav-link" to="/login/" title="Login to this fake bank">Login</Link>
                </li>
                <button onClick={() => setUser(null)}>Logout</button>
            </ul>

            )}
        
    </div>
</div>
</nav> */}