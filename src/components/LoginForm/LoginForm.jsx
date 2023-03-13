import { useDispatch } from "react-redux";

import { Form, Label } from "./LoginForm.stuled";

import Button from "components/Button/Button";
// import Button from "../Button/Button"
import { logIn } from "redux/auth/auth-operations";


const LoginForm = () => {
  const dispatch = useDispatch();
  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;

    dispatch(
      logIn({
       
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  }
    

return (
    <Form onSubmit={handleSubmit}>
    <Label >
      Email
      <input type="email" name="email" required label="User email" placeholder="User email" />
    </Label>
    <Label >
      Password
      <input type="password" name="password" required label="User password" placeholder="User password"/>
    </Label>
    <Button type="submit">Log in</Button>
  </Form>
)
}

export default LoginForm;