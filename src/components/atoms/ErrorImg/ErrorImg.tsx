import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/images/error.png';

const SImg = styled.img`
  width: 5rem;
  display: block;
  margin: 0 auto;

  z-index: 201;
`;

const ErrorImg: React.FC = () => <SImg src={img} alt="Error" />;

export default ErrorImg;
