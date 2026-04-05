import React from 'react';
import Header from '../components/layout/header/Header';
import Nav from '../components/layout/nav/Nav';
import { Outlet } from 'react-router-dom';

function DefaultPage() {
  return (
    <>
      <Header />
      <Nav />
      <Outlet />
    </>
  );
}

export default DefaultPage;
