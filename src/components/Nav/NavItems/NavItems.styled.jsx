import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled';

export const Nav = styled.ul`
  display: flex;
  margin-left: 1045px;

  list-style: none;
  padding: 0;
  margin: 0;
  align-items: center;
  justify-content: flex-end;
`;

export const NavBarLink = styled(NavLink)`
  text-decoration: none;
  display: inline-block;

  padding: 15px 37px;
  color: #d9d9d9;
  border: 1px solid #4fa94d;
  border-radius: 2px;
  background-color: #162913;
  font-family: 'Inter';

  font-weight: 900;
  font-size: 16px;
  line-height: 19px;
  :active {
    background-color: #325e2b;
    color: #162913;
  }
  :focus {
    background-color: #325e2b;
    color: #162913;
  }
`;

export const Link = styled.li`
  margin-left: 36px;
  :first-child {
    margin-left: 0;
  }
`;
export const NavItemContainer = styled.div`
  margin-left: 1045px;
  margin-top: 15px;
  margin-bottom: 15px;
`;
// width: 76px;
// height: 20px;

// font-family: 'Inter';
// font-style: normal;
// font-weight: 900;
// font-size: 16px;
// line-height: 19px;
// /* identical to box height */

// text-align: center;

// color: #D9D9D9;
