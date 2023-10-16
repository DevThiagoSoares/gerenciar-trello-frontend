import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import React from 'react';
import { Shopping } from '../Pages/shopping';
import { Home } from '../Pages/home';
import HouseIcon from '@mui/icons-material/House';
import AccessAlarmIcon from '@mui/icons-material/AccessAlarm';
import { Perfex } from '../Pages/Perfex';

export const Page_List = [
  {
    title: 'Inicio',
    route: '/',
    icon: <HouseIcon />,
    component: < Home />,
    showMenu: true,
  },
  {
    title: 'Compras',
    route: '/shopping',
    icon: <AddShoppingCartIcon />,
    component: < Shopping />,
    showMenu: true,
  },
  {
    title: 'Perfex',
    route: '/Perfex',
    icon: <AccessAlarmIcon />,
    component: < Perfex />,
    showMenu: true,
  },

]