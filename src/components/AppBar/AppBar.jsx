import {NavAuth} from "components/NavAuth/NavAuth";
import {Navigation} from "components/Navigation/Navigatiom";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.stuled";

import { useAuth } from "hooks";


const AppBar = () => { 
    const { isLoggedIn } = useAuth();
    
    return (
        
        <Header>
            <Navigation />
            {isLoggedIn ? <UserMenu /> : <NavAuth />}
        </Header>

    )
}

export default AppBar;