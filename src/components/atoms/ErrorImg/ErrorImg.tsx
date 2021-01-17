import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/images/error.png';

const SImg = styled.img`
  width: 5rem;
  display: block;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, 50%);
  z-index: 201;
`;

const ErrorImg: React.FC = () => <SImg src={img} alt="Error" />;

export default ErrorImg;
