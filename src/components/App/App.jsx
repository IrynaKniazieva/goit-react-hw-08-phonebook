// import { useDispatch } from 'react-redux';
import { lazy} from "react";
import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";
import { PrivateRoute } from "components/PrivateRoute";
import { RestrictedRoute } from "components/RestrictedRoute";
// import { useAuth } from "shared/hooks/useAuth";

const Home = lazy(() => import('pages/Home/Home'));
const Contacts = lazy(() => import('pages/Contacts/Contacts'));
const Register = lazy(() => import ('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
// const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  // const dispatch = useDispatch();
  // const {isRefreshing} = useAuth();

  // useEffect(() => {
  //   dispatch(refreshUser());
  // }, [dispatch]);

  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="/register" element={<RestrictedRoute redirectTo="/contacts" component={<Register />} />} />
        <Route path="/login" element={<RestrictedRoute redirectTo="/contacts" component={<Login />} />} />
        <Route path="/contacts" element={<PrivateRoute redirectTo="/login" component={<Contacts />} />} />
        {/* <Route path="*" element={<NotFound />} /> */}
      </Route>
    </Routes> 
  )
}