/* eslint-disable react/destructuring-assignment */
import React, { useContext, useState, useEffect } from 'react';
import styled from 'styled-components';
import Sidebar from '../template/Sidebar';
import Summary from '../template/Summary';
import Hamburger from '../../components/atoms/Hamburger/Hamburger';
import { AppContext, AppDispatchContext } from '../../contexts/AppContext';

const SWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 3fr 1fr;

  width: 84%;
  height: 79%;

  position: relative;
  overflow: hidden;
  border-radius: 2rem;
  box-shadow: var(--shadow-dark);
  margin: 8rem auto;

  @media only screen and (max-width: 110em) {
    width: 95%;
    height: 88%;
  }

  @media only screen and (max-width: 94em) {
    width: 98%;
    height: 91%;
  }

  @media only screen and (max-width: 75em) {
    width: 100vw;
    height: 100vh;

    margin: 0;
    grid-template-columns: 1.3fr 3fr;
  }

  @media only screen and (max-width: 56.25em) {
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;

    position: relative;
  }
`;

const SMain = styled.main`
  background-color: var(--color-white-dark);
  border-radius: 2rem 0 0 2rem;
  margin-left: -2rem;
  overflow-y: scroll;
  padding: 3.2rem 3.2rem 3.2rem 5.2rem;

  position: relative;
`;

const Layout: React.FC = (props) => {
  const [showSidebar, setShowSidebar] = useState(true);
  const app = useContext(AppContext);
  const newApp = { ...app };
  const setApp = useContext(AppDispatchContext);

  const backdropClickHandler = () => {
    setShowSidebar(false);
  };

  const hamburgerClickHandler = () => {
    setShowSidebar(true);
  };

  useEffect(() => {
    if (showSidebar) {
      newApp.showSidebar = true;
      setApp(newApp);
    } else {
      newApp.showSidebar = false;
      setApp(newApp);
    }
  }, [showSidebar]);

  return (
    <SWrapper>
      <Sidebar closed={backdropClickHandler} />
      <SMain>{props.children}</SMain>
      <Summary />
      <Hamburger clicked={hamburgerClickHandler} />
    </SWrapper>
  );
};

export default Layout;
