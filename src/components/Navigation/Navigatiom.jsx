import { Link } from "./Navigation.stuled"
import { useAuth } from "hooks";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

return (
    <nav>
      <Link to="/">Home</Link>
      {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
    </nav>
)
}

