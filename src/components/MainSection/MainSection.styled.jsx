import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';
export const Link = styled(NavLink)`
  text-decoration: none;
  display: inline-block;
  margin-top: 0;
  padding: 15px 48px;
  border: 1px solid #d9d9d9d9;
  border-radius: 2px;

  background-color: transparent;
  font-family: 'Inter';
  font-weight: 900;
  font-size: 24px;
  line-height: 29px;
  text-align: center;
  color: #d9d9d9d9;
  filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
  :active {
    background-color: #fff;
    color: #000;
  }
`;
export const MainBack = styled.img``;
export const MainContainer = styled.div`
  position: absolute;
  left: 340px;
  bottom: 75px;
  margin: 0;
`;
export const PositionContainer = styled.div`
  position: relative;
`;
export const MainTitle = styled.h1`
display-block;
  margin-top: 0;
  margin-bottom: 15px;
  font-family: 'Inter';
  font-weight: 900;
  font-size: 81px;
  line-height: 98px;

  color: #f5f5f5d9;
`;
export const MainSubTitle = styled.p`
display-block;
margin-top:0;
margin-bottom:0;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 400;
  font-size: 36px;
  line-height: 140%;
  color: #f5f5f5d9;
`;
export const TitleContainer = styled.div`
  margin-bottom: 55px;
`;
