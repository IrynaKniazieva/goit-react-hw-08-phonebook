// import { useAuth } from '../../shared/hooks/useAuth';

// import { logOut } from 'redux/auth/operations';
import Button from "components/Button/Button";
import { useAuth } from "hooks";


export const UserMenu = () => {
  
    const { user } = useAuth();
  
    return (
      <div >
        <p>Welcome, {user.name}</p>
        <Button type="button">Logout</Button>
       
        {/* <button type="button" onClick={() => dispatch(logOut())}> */}
          {/* Logout
        </button> */}
      </div>
    );
  };