import {Outlet} from 'react-router-dom';
import React from 'react';
import MiniDrawer from '../Components/Navbar/miniDrawer';

export function DefaultLayout() {
  return (
    <>
      <MiniDrawer>
        <Outlet />
      </MiniDrawer>
    </>
  );
}
