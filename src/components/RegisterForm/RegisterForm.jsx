import Button from "components/Button/Button";
import { useDispatch } from "react-redux";
import { signUp } from "redux/auth/auth-operations";
import { nanoid } from "nanoid";
import { useMemo } from "react";
import { Form, Label } from "./RegisterForm.stuled";

const RegisterForm = () => {
  const dispatch = useDispatch();
  const id = useMemo(() => nanoid(), []);



  const handleSubmit = e => {
    e.preventDefautt();
    const form = e.currentTarget;
    dispatch(
      signUp({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    )
    form.reset();
  }

return (
    <Form onSubmit={handleSubmit} autoComplete="off" >
    <Label htmlFor={id}>
      Name
      <input id={id} type="text" name="name" required label="User name" placeholder="User name"/>
    </Label>
    <Label htmlFor={id}>
      Email
      <input id={id} type="email" name="email" required label="User email" placeholder="User email"/>
    </Label>
    <Label htmlFor={id}>
      Password
      <input id={id} type="password" name="password" required label="User password" placeholder="User password"/>
    </Label>
    <Button>Register</Button>
  </Form>
)
}

export default RegisterForm;