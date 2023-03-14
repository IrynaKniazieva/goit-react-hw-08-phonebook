// import Button from "components/Button/Button";
import { Box, Button, Container, TextField } from "@mui/material";
import { useDispatch } from "react-redux";
import { register } from "redux/auth/auth-operations";


// import { Form, Label } from "./RegisterForm.stuled";

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
  
  <Container >
    <Box component="form"
      onSubmit={handleSubmit}
      
      sx={{display: 'flex',
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
      >
        <Box sx={{display: 'flex', flexDirection: 'column'}}>
        <TextField
         name="name"
          label="Name"
          type="text"
          autoComplete="current-password"
        />
         <TextField
          name="email"
          label="Email"
          type="email"
          autoComplete="current-password"
        /> <TextField
        name="password"
        label="Password"
        type="password"
        autoComplete="current-password"
      />
      <Button type="submit" variant="outlined" size="medium" >Register</Button>
        </Box>
      </Box>
   
  </Container>
  
 
)
}

{/* <Form onSubmit={handleSubmit}>
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
    <Button type="submit">Register</Button>
   
  </Form> */}