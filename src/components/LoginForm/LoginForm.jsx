import { Form, Label } from "./LoginForm.stuled";

const LoginForm = () => {

return (
    <Form >
    <Label >
      Email
      <input type="email" name="email" />
    </Label>
    <Label >
      Password
      <input type="password" name="password" />
    </Label>
    <button type="submit">Log in</button>
  </Form>
)
}

export default LoginForm;