import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
export const Header = styled.header`
  background-color: #244509;

  width: 100%;
`;

export const NavBar = styled.nav`
  display: flex;
`;
export const LogoLink = styled(Link)`
  margin-left: 52px;
  display: flex;
  align-items: center;
  text-decoration: none;
`;
export const NavImg = styled.img`
  margin: 0;
  width: 80px;
  height: 80px;
`;
export const Title = styled.h2`
  display: inline-block;
  margin-left: 22px;
  font-family: 'Inter';
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  text-align: center;

  color: #888888;
`;
