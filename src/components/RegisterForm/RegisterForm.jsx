import { Box, Button, Container, TextField, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/auth-operations';


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
    <Container sx={{ marginTop: '10' }}>
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{
          display: 'flex',
          '& .MuiTextField-root': { m: 1, width: '25ch' },
        }}
        noValidate
        autoComplete="off"
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            margin: '0 auto',
            paddingTop: '24px',
          }}
        >
          <Typography variant="h4" gutterBottom>
            REGISTER FORM
          </Typography>
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
          />{' '}
          <TextField
            name="password"
            label="Password"
            type="password"
            autoComplete="current-password"
          />
          <Button type="submit" variant="outlined" size="medium">
            Register
          </Button>
        </Box>
      </Box>
    </Container>
  );
};
