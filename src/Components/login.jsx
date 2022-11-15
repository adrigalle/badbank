import React, { useContext} from 'react';
import { UserContext } from "./context/context";
import Records from './context/records.json';
import Card from './assets/card';
import {Link} from "react-router-dom";

function Login(){
    const { user, setUser } = useContext(UserContext);
    //const user = React.useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [reqEmail, setReqEmail]   = React.useState('');
    const [reqPassword, setReqPassword] = React.useState('');
    const [show, setShow] = React.useState(true);

    const users = [...Records];
    //console.log(JSON.stringify(users));

    const btnValidate = () => {
        return reqEmail.length && reqPassword.length;
    }
    
    //validate fields to make sure that they even work
    function validateEmail(email, label) {
        var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/; // simple email validation

        if(validRegex.test(email) == false) {
            setStatus('Please enter a valid email address');
            setTimeout(() => setStatus(''),3000);
            // this is to reset status after 3 seconds
            return false;
        };
        return true;
    }

    function accountValidation(reqEmail, reqPassword) {
        // making all email lower case to check
        const emailLower = reqEmail.toLowerCase();
        console.log(emailLower);
        const test1 = users.find(newuser => {
            if(newuser.email === emailLower) {
                console.log(newuser);
                if(newuser.password === reqPassword) {
                    user.name = newuser.name;
                    user.email = newuser.email;
                    user.password = newuser.password;
                    user.balance = newuser.balance;
                    setUser(newuser);
                    let verdict = true
                    return verdict;
                }
                else {
                    setStatus('Maybe Incorrect email or password');
                    setTimeout(() => setStatus(''),3000);
                    let verdict = false;
                    return verdict;
                };

            } 
            else {
                setStatus('Incorrect email or password');
                setTimeout(() => setStatus(''),3000);
                let verdict = false;
                return verdict;
            };
           
        });
        let verdict = test1;
        return verdict;
    }

    function handleLogin() {
    //     //theUser(email, password);
        console.log(`${reqEmail} : ${reqPassword}`);
    //     //console.log(users);
        if (!validateEmail(reqEmail, 'email'))     return;
    //    if (!validate(reqPassword, 'password'))    return;
        if (!accountValidation(reqEmail, reqPassword)) return;
        console.log(user);
        setShow(false);
        //setUser(user);

    }

    return (
        <Card 
                bgcolor="warning"
                header="Login"
                txtcolor="black"
                status={status}
                body={show ? (
                    <>
                        Email address<br/>
                        <input type="input" className="form-control" id="email" placeholder="Enter email" value={reqEmail} onChange={e => setReqEmail(e.currentTarget.value)}/><br/>
                        Password<br/>
                        <input type="input" className="form-control" id="password" placeholder="Enter password" value={reqPassword} onChange={e => setReqPassword(e.currentTarget.value)}/><br/>
                        <button type="submit" className="btn btn-light" onClick={handleLogin} disabled={!btnValidate()}>Login</button>
                    </>
                    ) : (
                    <>
                        <h5>Success Logging in!</h5>
                        <p>Welcome {user.name}!</p>
                        <button className="btn btn-light">
                            <Link to="/">go home</Link>
                        </button>
                    </>
    
                    )}
            />
    );
}  

export default Login;

