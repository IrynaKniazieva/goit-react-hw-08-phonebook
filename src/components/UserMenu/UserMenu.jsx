import { Box, Button, Typography } from '@mui/material';
import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';

export const UserMenu = () => {
  const dispatch = useDispatch();

  const { user } = useAuth();

  const handleLogOut = () => dispatch(logOut());

  return (
    <Box>
      <Typography variant="overline" gutterBottom>
        {user.email}
      </Typography>
      <Button onClick={handleLogOut} sx={{ marginLeft: '25px', mr: '15px' }}>
        Log Out
      </Button>
    </Box>
  );
};
