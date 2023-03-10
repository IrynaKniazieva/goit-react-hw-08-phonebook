import Button from "components/Button/Button";
import { useDispatch } from "react-redux";
import { signup } from "redux/auth/auth-operations";

import { Form, Label } from "./RegisterForm.stuled";

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefautt();
    const form = e.currentTarget;
    dispatch(
      signup({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
    form.reset();
  }

return (
  <div>
   <Form onSubmit={handleSubmit}>
    <Label >
      Name
      <input type="text" name="name" label="User name" placeholder="User name"/>
    </Label>
    <Label >
      Email
      <input type="email" name="email" label="User email" placeholder="User email"/>
    </Label>
    <Label >
      Password
      <input type="password" name="password" label="User password" placeholder="User password"/>
    </Label>
    <Button>Register</Button>
  </Form>
  </div>
 
)
}

export default RegisterForm;