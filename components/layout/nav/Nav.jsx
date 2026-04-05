import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import NavItem from './Navitem';

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-evenly;
  align-items: center;
`;

function Nav() {
  return (
    <Wrapper>
      <NavItem url={'/insert'}>방명록 등록</NavItem>
      <NavItem url={'/list'}>방명록 목록</NavItem>
      <NavItem url={'/lotto'}>로또 생성기</NavItem>
    </Wrapper>
  );
}

export default Nav;
