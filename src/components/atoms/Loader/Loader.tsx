import React from 'react';
import styled from 'styled-components';
import img from '../../../assets/images/loader.gif';

const SImg = styled.img`
  width: 5rem;
`;

const Loader: React.FC = () => <SImg src={img} alt="Loading" />;

export default Loader;
