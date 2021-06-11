import React, { memo } from 'react';
import style from './Header.module.scss';

const HeaderAdmin = memo(() => {
  return <div></div>;
});

const HeaderVitrine = memo(() => {
  return <div></div>;
});
const Header = memo(({ isAdmin }) => {
  return isAdmin ? <HeaderAdmin /> : <HeaderVitrine />;
});

export default Header;
