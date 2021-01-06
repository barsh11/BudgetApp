import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import BalanceLabel from '../../atoms/BalanceLabel/BalanceLabel';

export type SidebarBalanceProps = TypographyProps & {
  balance: number;
  currency: string;
};

const SWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: var(--color-primary-light);
  border-radius: 1rem;
  padding: 1rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;

  width: 74%
  height: 15.5%;
`;

const SidebarBalance: React.FC<SidebarBalanceProps> = ({ balance, currency }) => (
  <SWrapper>
    <BalanceLabel balance={balance} currency={currency} />
    <Typography variant="subtitle1" align="center" color="textPrimary">
      Current balance
    </Typography>
  </SWrapper>
);

export default SidebarBalance;
