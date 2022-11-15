import React, { useContext} from 'react';
import { UserContext } from './context/context';
import Card from './assets/card';


function Deposit(){
    const [status, setStatus]       = React.useState('');
    const [deposit, setDeposit] = React.useState('');
    const { user, setUser } = useContext(UserContext);
    const [balance, setBalance] = React.useState(user.balance);

    const btnValidate = () => {
        return deposit.length;
    }

    const amountValidate = () => {
        if(!Number(deposit)) {
            setStatus('Please enter a valid amount');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }

    const amountNegative = () => {
        if(deposit < 0) {
            setStatus('Please enter a positive amount');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        setStatus(`Successfully deposited $${deposit} to account!`);
        setTimeout(() => setStatus(''),3000);
        console.log(JSON.stringify(user));
        return true;
    }

    function handleDeposit() {
        console.log(deposit);
        if(!amountValidate(deposit)) return;
        if(!amountNegative(deposit)) return;
        user.balance = parseFloat(user.balance) + parseFloat(deposit);
        setBalance(parseFloat(balance) + parseFloat(deposit));
        setDeposit('');
    }

    return ( 
        <div>
        <Card 
            bgcolor="success"
            header="Deposit"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; ${balance} <br/><br/>
                    Deposit to {user.name}'s account<br/>
                    <input type="input" className="form-control" id="deposit" placeholder="Deposit Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleDeposit} disabled={!btnValidate()}>Deposit</button>
                </>
            }
        />
        </div>
    );
}  

export default Deposit;