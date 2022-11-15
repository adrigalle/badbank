import React, { useContext} from 'react';
import Card from './assets/card';
import { UserContext } from "./context/context";

function Home(){
    const { user, setUser } = useContext(UserContext);

    return (
        <div>
            <Card 
                txtcolor="black"
                header="BadBank Landing Page"
                title="Welcome to the bank"
                text="This is a coding exercise, please don't put in any super important information"
                body={(
                    <div>
                        <img src="bank.png" className="img-fluid" alt="Responsive image"/>
                        Current user is: {user.name}
                    </div>
                
                )}
            />
        </div>
    );
} 

export default Home;