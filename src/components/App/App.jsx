import { lazy } from "react";
import { Route, Routes, } from "react-router-dom";
import { Layout } from "components/Layout/Layout";

const Home = lazy(() => import('pages/Home/Home'));
const Register = lazy(() => import ('pages/Register/Register'));
const Login = lazy(() => import('pages/Login/Login'));
const NotFound = lazy(() => import('pages/NotFound/NotFound'));

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}/>
        <Route path="register" element={<Register />}/>
        <Route path="login" element={<Login />}/>
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}