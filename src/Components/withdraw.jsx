import React, { useContext} from 'react';
import Card from './assets/card';
import { UserContext } from "./context/context";

function Withdraw(){
    const { user, setUser } = useContext(UserContext);
    const [status, setStatus]       = React.useState('');
    const [withdrawal, setWithdrawal] = React.useState('');
    const [balance, setBalance] = React.useState(user.balance);

    const btnValidate = () => {
        return withdrawal.length;
    }

    const amountValidate = () => {
        if(!Number(withdrawal)) {
            setStatus('Please enter a valid amount');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        if(withdrawal > balance) {
            setStatus('Overdraft! Enter amount lower than balance');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        return true;
    }
    const amountNegative = () => {
        if(withdrawal < 0) {
            setStatus('Please enter a positive amount');
            setTimeout(() => setStatus(''),3000);
            return false;
        }
        setStatus(`Successfully withdrew $${withdrawal} to account!`);
        setTimeout(() => setStatus(''),3000);
        console.log(JSON.stringify(user));
        return true;
    }

    function handleWithdraw() {
        console.log(withdrawal);
        if(!amountValidate(!withdrawal)) return;
        if(!amountNegative(withdrawal)) return;
        user.balance = parseFloat(user.balance) - parseFloat(withdrawal);
        setBalance(parseFloat(balance) - parseFloat(withdrawal));
        setWithdrawal('');
    }

    return (
        <Card 
            bgcolor="purple"
            header="Withdraw"
            txtcolor="black"
            status={status}
            body={
                <>
                    Balance &emsp;&emsp; ${balance} <br/><br/>
                    Withdraw from {user.name}'s account<br/>
                    <input type="input" className="form-control" id="withdraw" placeholder="Withdraw Amount" value={withdrawal} onChange={e => setWithdrawal(e.currentTarget.value)}/><br/>
                    <button type="submit" className="btn btn-light" onClick={handleWithdraw} disabled={!btnValidate()}>Withdraw</button>
                </>
            }
        />
    );
}  

export default Withdraw;