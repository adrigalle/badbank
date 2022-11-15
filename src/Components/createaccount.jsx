import React, { useContext} from 'react';
import Records from './context/records.json';
import Card from './assets/card';
import { UserContext } from "./context/context";

function CreateAccount(){
    const [show, setShow]           = React.useState(true);
    const [status, setStatus]       = React.useState("");
    const [name, setName]           = React.useState("");
    const [email, setEmail]         = React.useState("");
    const [password, setPassword]   = React.useState("");

    const { user, setUser } = useContext(UserContext);
    const btnValidate = () => {
        return name.length && email.length && password.length;
    }


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
    // need to add more validation for email and password

    function validatePass(password) {
        var passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,20}$/;
        if(passw.test(password) == true) return true;
        else { 
        setStatus('One uppercase, one lowercase, one number, 8-20 characters long')
        setTimeout(() => setStatus(''),3000);
        return false;
        }
    }

    function addToJson(name, email, password) {
        let newUser = {"name": name, "email":email, "password":password, balance:100};
        Records.push(newUser);
    }

    function handleCreate() {
        console.log(name, email, password);
        if (!validateEmail(email, 'email'))     return;
        if (!validatePass(password))            return;
        addToJson(name, email, password);
        setShow(false);
    }

    function clearForm() {
        setName('');
        setEmail('');
        setPassword('');
        setShow(true);
    }

    return (
        <Card 
            bgcolor="primary"
            header="Create Account"
            status={status}
            body={show ? (
                    <>

                    Name<br/>
                    <input type="input" className="form-control" id="name" placeholder="Enter name" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
                    Email address<br/>
                    <input type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
                    Password<br/>
                    <input type="input" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleCreate} disabled={!btnValidate()} title="One uppercase, one lowercase, one number, 8-20 characters long">Create Account</button>

                    </>
                ) : (
                    <>

                    <h5>Success!</h5>
                    <p>Thank you so much for choosing the BadBank to do business. I really hope you didn't actually use it since this is not a real bank</p>
                    <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>

                    </>
                )}
        />
    );
}  

export default CreateAccount;

// would like to add if they are already in the list then offer login instead



// validation got it from https://www.w3resource.com/javascript/form/password-validation.php