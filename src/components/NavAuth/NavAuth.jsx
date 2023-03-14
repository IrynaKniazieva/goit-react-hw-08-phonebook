import { Box, Button } from '@mui/material';

import { Link } from './NavAuth.stuled';

export const NavAuth = () => {
  return (
    <Box>
      <Button>
        <Link to="register">Register</Link>
      </Button>
      <Button>
        <Link to="login">log In</Link>
      </Button>
    </Box>
  );
};
