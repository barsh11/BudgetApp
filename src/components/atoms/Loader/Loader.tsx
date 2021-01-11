import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/images/loader.gif';

const SImg = styled.img`
  width: 5rem;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 201;
`;

const Loader: React.FC = () => <SImg src={img} alt="Loading" />;

export default Loader;
