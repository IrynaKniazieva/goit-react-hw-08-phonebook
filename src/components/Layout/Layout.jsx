import { Container } from './Layout.stuled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import NavAuth from "../NavAuth/NavAuth"
import AppBar from 'components/AppBar/AppBar';

export const Layout = () => {
  return (
    <Container>
      <AppBar/>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
