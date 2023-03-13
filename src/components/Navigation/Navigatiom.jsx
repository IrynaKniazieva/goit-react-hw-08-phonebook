import { Link, Conteiner} from "./Navigation.stuled"
import { useAuth } from "hooks";

// import { Box } from "@mui/material";
// import Link from "@mui/material";

export const Navigation = () => {
    const { isLoggedIn } = useAuth();

return (
    <Conteiner>
      <Link to="/">Home</Link>
      {isLoggedIn && (<Link to="/contacts">Contacts</Link>)}
    </Conteiner>
)
}

