import React from 'react';
import styled from 'styled-components';
import UserImg from '../../atoms/UserImg/UserImg';
import UserDetails from '../../atoms/UserDetails/UserDetails';

type SummaryUserInfoProps = {
  imgSrc: string;
  userName: string;
  userEmail: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-tertiary-light);

  width: 15%;
  padding: 2.5rem;
  border-radius: 1rem;
`;

const SummaryItem: React.FC<SummaryUserInfoProps> = ({ imgSrc, userName, userEmail }) => (
  <SWrapper>
    <UserImg imgSrc={imgSrc} />
    <UserDetails userName={userName} userEmail={userEmail} />
  </SWrapper>
);

export default SummaryItem;
