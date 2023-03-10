import { nanoid } from "nanoid";
import { useMemo } from "react";

import { Form, Label } from "./LoginForm.stuled";

import Button from "../Button/Button"


const LoginForm = () => {
    const id = useMemo(() => nanoid(), []);

return (
    <Form >
    <Label htmlFor={id}>
      Email
      <input id={id} type="email" name="email" required label="User email" placeholder="User email" />
    </Label>
    <Label htmlFor={id}>
      Password
      <input id={id} type="password" name="password" required label="User password" placeholder="User password"/>
    </Label>
    <Button>Log in</Button>
  </Form>
)
}

export default LoginForm;