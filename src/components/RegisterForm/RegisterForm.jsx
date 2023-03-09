// import useForm from "../../shared/hooks/useForm";
// import TextField from "shared/TextField/TextField";
// import initialState from "./initialState";

import { Form, Label } from "./RegisterForm.stuled";

const RegisterForm = ({onSubmit}) => {

return (
    <Form >
    <Label >
      Name
      <input type="text" name="name" />
    </Label>
    <Label >
      Email
      <input type="email" name="email" />
    </Label>
    <Label >
      Password
      <input type="password" name="password" />
    </Label>
    <button type="submit">Register</button>
  </Form>
)
}

export default RegisterForm;