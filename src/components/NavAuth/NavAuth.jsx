import { Container, Link} from "./NavAuth.stuled";

const NavAuth = () => {

  return (
    <Container>
        <Link to="register">Register</Link>
        <Link to="login">Login</Link>
    </Container>
  );

};

export default NavAuth;