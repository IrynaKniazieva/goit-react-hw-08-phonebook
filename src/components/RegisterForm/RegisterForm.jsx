import Button from "components/Button/Button";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";

import { Form, Label } from "./RegisterForm.stuled";

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();

    const form = e.currentTarget;

    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

return (
  <div>
   <Form onSubmit={handleSubmit}>
    <Label>
      Name
      <input type="text" name="name"/>
    </Label>
    <Label >
      Email
      <input  type="email" name="email"/>
    </Label>
    <Label >
      Password
      <input type="password" name="password"/>
    </Label>
    <Button>Register</Button>
  </Form>
  </div>
 
)
}

// export default RegisterForm;