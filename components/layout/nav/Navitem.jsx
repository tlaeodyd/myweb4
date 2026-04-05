import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  font-size: 2em;
  font-weight: 700;
  text-decoration: none;
  border: 2px solid black;
  border-radius: 3px;
  color: black;
  background-color: skyblue;
`;

function NavItem({ url, children }) {
  return <StyledLink to={url}>{children}</StyledLink>;
}

export default NavItem;
