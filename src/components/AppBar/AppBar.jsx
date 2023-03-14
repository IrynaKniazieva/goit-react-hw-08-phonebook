import { NavAuth } from 'components/NavAuth/NavAuth';
import { Navigation } from 'components/Navigation/Navigatiom';
import { UserMenu } from 'components/UserMenu/UserMenu';
// import { Header } from "./AppBar.stuled";
import { Box, Container } from '@mui/material';

import { useAuth } from 'hooks';

const AppBar = () => {
  const { isLoggedIn } = useAuth();

  return (
    <header>
      <Container fixed>
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '8px',
            bgcolor: '#cfe8fc',
          }}
        >
          <Navigation />
          {isLoggedIn ? <UserMenu /> : <NavAuth />}
        </Box>
      </Container>
    </header>
  );
};

export default AppBar;
