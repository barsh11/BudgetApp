import React from 'react';
import styled from 'styled-components';
import UserImg from '../../atoms/UserImg/UserImg';
import UserDetails from '../../atoms/UserDetails/UserDetails';

export type SummaryUserInfoProps = {
  imgSrc: string;
  userName: string;
  userEmail: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-tertiary-light);
  padding: 2.5rem;
  margin-top: 3.2rem;
  margin-bottom: 3.2rem;
  border-radius: 1rem;

  width: 15rem;
  height: 13.5rem;
`;

const SummaryItem: React.FC<SummaryUserInfoProps> = ({ imgSrc, userName, userEmail }) => (
  <SWrapper>
    <UserImg imgSrc={imgSrc} />
    <UserDetails userName={userName} userEmail={userEmail} />
  </SWrapper>
);

export default SummaryItem;
