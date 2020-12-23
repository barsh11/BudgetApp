import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import BalanceLabel from '../../atoms/BalanceLabel/BalanceLabel';

type SidebarBalanceProps = TypographyProps & {
  balance: number;
  currency: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  background-color: var(--color-primary-light);
  padding: 2.5rem 3rem;
  border-radius: 1rem;

  width: 15%;
`;

const SidebarBalance: React.FC<SidebarBalanceProps> = ({ balance, currency }) => (
  <SWrapper>
    <BalanceLabel balance={balance} currency={currency} />
    <Typography variant="h6" align="center" color="textPrimary">
      Current balance
    </Typography>
  </SWrapper>
);

export default SidebarBalance;
