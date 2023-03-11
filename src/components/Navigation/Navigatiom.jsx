import { Link } from "./Navigation.stuled"
import { useAuth } from "shared/hooks";

const Navigation = () => {
    const { isLoggedIn } = useAuth();

return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
    </nav>
)
}

export default Navigation;