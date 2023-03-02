import React, { useContext} from 'react';
import Records from './context/records.json';
import { UserContext } from "./context/context";

function AllData(){
    const { user, setUser } = useContext(UserContext);

    const users = [...Records];
    console.log(JSON.stringify(users));

 
    return (
        <table className="table table-hover table-bordered table-sm w-50">
            <thead>
                <tr>
                    <th className="th-lg" scope="col">Name</th>
                    <th className="th-lg" scope="col">Email</th>
                    <th className="th-lg" scope="col">Password</th>
                    <th className="th-lg" scope="col">Balance</th>
                </tr>
            </thead>
            <tbody>
                {users.map((user, index) =>(
                    <tr key={index.toString()}>
                        <td>{user.name}</td>
                        <td>{user.email}</td>
                        <td>{user.password}</td>
                        <td>${user.balance}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
}  

export default AllData;
