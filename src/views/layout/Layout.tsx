/* eslint-disable react/destructuring-assignment */
import React from 'react';
import styled from 'styled-components';
import Sidebar from '../template/Sidebar';
import Summary from '../template/Summary';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  width: 80%;
  height: 68.2rem;

  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow-dark);
  margin: 8rem auto;
`;

const SMain = styled.main`
  background-color: var(--color-white-dark);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  overflow-y: scroll;
  padding: 3.2rem 3.2rem 3.2rem 5.2rem;
`;

const Layout: React.FC = (props) => (
  <SWrapper>
    <Sidebar />
    <SMain>{props.children}</SMain>
    <Summary />
  </SWrapper>
);

export default Layout;
