import React from 'react';
import styled from 'styled-components';
import ErrorImg from '../../atoms/ErrorImg/ErrorImg';
import ErrorInfo from '../../atoms/ErrorInfo/ErrorInfo';
import ErrorBtn from '../../atoms/ErrorBtn/ErrorBtn';

type ErrorMessageProps = {
  errorMsg: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  background-color: #fff;
  border-radius: 0.8rem;
  padding: 3rem 2rem;
  height: 50%;
  min-height: 25rem;
  max-height: 30rem;
  width: 40%;
  max-width: 350px;
  z-index: 201;

  @media only screen and (max-width: 56.25em) {
    width: 35%;
    min-width: 200px;
    min-height: 30%;
  }

  @media only screen and (max-width: 22em) {
    width: 40%;
    min-height: 30%;
  }
`;

const ErrorMessage: React.FC<ErrorMessageProps> = ({ errorMsg }) => (
  <SWrapper>
    <ErrorImg />
    <ErrorInfo errorMsg={errorMsg} />
    <ErrorBtn />
  </SWrapper>
);

export default ErrorMessage;
