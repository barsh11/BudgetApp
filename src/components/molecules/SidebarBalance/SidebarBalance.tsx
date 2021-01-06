import React from 'react';
import styled from 'styled-components';
import Box, { BoxProps } from '@material-ui/core/Box';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import BalanceLabel from '../../atoms/BalanceLabel/BalanceLabel';

export type SidebarBalanceProps = TypographyProps &
  BoxProps & {
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
  padding: 1.5rem 1rem;
  margin-bottom: 2rem;
  letter-spacing: 2px;

  width: 74%
  height: 15.5%;
`;

const SidebarBalance: React.FC<SidebarBalanceProps> = ({ balance, currency }) => (
  <SWrapper>
    <BalanceLabel balance={balance} currency={currency} />
    <Typography variant="h6" align="center" color="textPrimary">
      <Box fontWeight="fontWeightLight">Current balance</Box>
    </Typography>
  </SWrapper>
);

export default SidebarBalance;
