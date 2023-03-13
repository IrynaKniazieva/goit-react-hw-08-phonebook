import { useAuth } from "hooks";
import { useDispatch } from "react-redux";
import { logOut } from "redux/auth/auth-operations";
import { ButtonUserMenu, Container } from "./UserMenu.stuled";


export const UserMenu = () => {
  const dispatch = useDispatch();
  
    const { user } = useAuth();

    const handleLogOut = () => dispatch(logOut());
  
    return (
      <Container>
        <p>{user.email}</p>
        <ButtonUserMenu type="button" onClick={handleLogOut}>Log Out</ButtonUserMenu>
      </Container>
    );
  };