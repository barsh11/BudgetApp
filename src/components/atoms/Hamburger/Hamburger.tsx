import React from 'react';
import styled from 'styled-components';

type HamburgerProps = {
  clicked: Function;
};

const SWrapper = styled.div`
  @media only screen and (min-width: 56.25em) {
    display: none;
  }
`;

const SLine = styled.div`
  position: absolute;
  top: 0;
  left: 1.5rem;
  margin-top: 3rem;

  &,
  &::before,
  &::after {
    width: 2.2rem;
    height: 2px;
    background-color: var(--color-primary);
    display: inline-block;
    transition: all 0.2s;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    left: 0;
  }

  &::before {
    top: -0.8rem;
  }

  &::after {
    top: 0.8rem;
  }
`;

const Hamburger: React.FC<HamburgerProps> = ({ clicked }) => (
  <SWrapper onClick={(e) => clicked(e)}>
    <SLine />
  </SWrapper>
);

export default Hamburger;
