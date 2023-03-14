import { Link } from './Navigation.stuled';
import { useAuth } from 'hooks';

import { Box, Button } from '@mui/material';

export const Navigation = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box>
      <Button>
        <Link to="/">Home</Link>
      </Button>
      {isLoggedIn && (
        <Button>
          <Link to="/contacts">Contacts</Link>
        </Button>
      )}
    </Box>
  );
};
