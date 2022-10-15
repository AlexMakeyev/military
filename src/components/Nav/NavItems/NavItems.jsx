import React from 'react';
// import { NavLink } from 'react-router-dom';
import { items } from './items';
import { Nav, NavBarLink, Link, NavItemContainer } from './NavItems.styled';

export default function NavItems() {
  const elements = items.map(({ id, to, text }) => {
    return (
      <Link key={id}>
        <NavBarLink to={to} end>
          {text}
        </NavBarLink>
      </Link>
    );
  });
  return (
    <NavItemContainer>
      <Nav>{elements}</Nav>
    </NavItemContainer>
  );
}
