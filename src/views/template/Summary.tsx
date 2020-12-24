import React from 'react';
import styled from 'styled-components';
import SummaryUserInfo, { SummaryUserInfoProps } from '../../components/molecules/SummaryUserInfo/SummaryUserInfo';
import SummaryList from '../../components/organisms/SummaryList/SummaryList';

type SummaryProps = SummaryUserInfoProps & {
  data: {
    isCancelled?: boolean;
    company?: string;
    date: string;
    amount: number;
    currency: string;
    type: 'expense' | 'income' | 'cancel';
    isPaypal?: boolean;
  }[];
};

const SWrapper = styled.div`
  background-color: var(--color-tertiary);
  border-radius: 0 2rem 2rem 0;

  display: flex;
  flex-direction: column;
  align-items: center;

  height: 68.2rem;
`;

const Sidebar: React.FC<SummaryProps> = ({ imgSrc, userName, userEmail, data }) => (
  <SWrapper>
    <SummaryUserInfo imgSrc={imgSrc} userName={userName} userEmail={userEmail} />
    <SummaryList data={data} />
  </SWrapper>
);

export default Sidebar;
