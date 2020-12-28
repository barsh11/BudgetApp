import React from 'react';
import styled from 'styled-components';
import SummaryUserInfo, { SummaryUserInfoProps } from '../../components/molecules/SummaryUserInfo/SummaryUserInfo';
import SummaryList, { SummaryListProps } from '../../components/organisms/SummaryList/SummaryList';

export type SummaryProps = SummaryUserInfoProps & SummaryListProps;

const SWrapper = styled.div`
  background-color: var(--color-tertiary);
  border-radius: 0 2rem 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 68.2rem;
`;

const Summary: React.FC<SummaryProps> = ({ imgSrc, userName, userEmail, summaryList }) => (
  <SWrapper>
    <SummaryUserInfo imgSrc={imgSrc} userName={userName} userEmail={userEmail} />
    <SummaryList summaryList={summaryList} />
  </SWrapper>
);

export default Summary;
