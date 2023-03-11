import NavAuth from "components/NavAuth/NavAuth";
import Navigation from "components/Navigation/Navigatiom";
import { UserMenu } from "components/UserMenu/UserMenu";
import { Header } from "./AppBar.stuled";
import { useAuth } from "shared/hooks";


const AppBar = () => {
    const {isLoggedId} = useAuth();
    
    return (
        <Header>
            <Navigation/>
            {isLoggedId ? <UserMenu/> : <NavAuth/>}
        </Header>

    )
}

export default AppBar;