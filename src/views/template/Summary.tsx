import React from 'react';
import styled from 'styled-components';
import SummaryUserInfo, { SummaryUserInfoProps } from '../../components/molecules/SummaryUserInfo/SummaryUserInfo';
import SummaryList, { SummaryListProps } from '../../components/organisms/SummaryList/SummaryList';

export type SummaryProps = SummaryUserInfoProps & SummaryListProps;

const SWrapper = styled.div`
  background-color: var(--color-tertiary);
  border-radius: 0 2rem 2rem 0;
  padding-top: 3.2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 68.2rem;
`;

const Summary: React.FC<SummaryProps> = ({ imgSrc, userName, userEmail }) => (
  <SWrapper>
    <SummaryUserInfo imgSrc={imgSrc} userName={userName} userEmail={userEmail} />
    <SummaryList />
  </SWrapper>
);

export default Summary;
