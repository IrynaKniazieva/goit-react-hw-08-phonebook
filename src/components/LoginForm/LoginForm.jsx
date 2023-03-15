import { useDispatch } from 'react-redux';
import { Box, Button, Container, TextField } from '@mui/material';
import { logIn } from 'redux/auth/auth-operations';


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
            Log In
          </Button>
        </Box>
      </Box>
    </Container>
  );
};

export default LoginForm;
