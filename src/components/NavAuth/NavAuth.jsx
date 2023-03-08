import { NavLink } from "react-router-dom";

const NavAuth = () => {

  return (
    <div>
        <NavLink to="register">Register</NavLink>
        <NavLink to="login">Login</NavLink>
    </div>
  );

};

export default NavAuth;