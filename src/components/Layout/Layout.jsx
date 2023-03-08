import { Header, Link, Container } from './Layout.stuled';
import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';

import NavAuth from "../NavAuth/NavAuth"

export const Layout = () => {
  return (
    <Container>
      <Header>
        <nav>
          <Link to="/">Home</Link>
          <NavAuth/>
        </nav>
      </Header>
      <Suspense fallback={<div>Loading...</div>}>
        <Outlet />
      </Suspense>
    </Container>
  );
};
