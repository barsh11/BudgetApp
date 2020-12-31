import React, { Suspense } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';
import capitalize from '../../../utils/capitalize';

const CardsIcon = React.lazy(() => import('../../atoms/CardsIcon/CardsIcon'));
const DashboardIcon = React.lazy(() => import('../../atoms/DashboardIcon/DashboardIcon'));
const TransactionsIcon = React.lazy(() => import('../../atoms/TransactionsIcon/TransactionsIcon'));
const UserIcon = React.lazy(() => import('../../atoms/UserIcon/UserIcon'));

export type SidebarNavItemProps = TypographyProps & {
  label: 'cards' | 'dashboard' | 'transactions' | 'user profile';
};

const SWrapper = styled.div`
  display: flex;
  align-items: center;

  opacity: 0.6;
  transition: all 0.2s;
  letter-spacing: 2px;

  &:hover {
    opacity: 1;
    transform: scale(1.2);
  }
`;

const getItemIcon = (label: string) => {
  switch (label) {
    case 'cards':
      return <CardsIcon />;
    case 'transactions':
      return <TransactionsIcon />;
    case 'user profile':
      return <UserIcon />;
    default:
      return <DashboardIcon />;
  }
};

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ label }) => {
  const icon = getItemIcon(label);

  return (
    <SWrapper>
      <Suspense fallback={<FallbackIcon location="sidebar" />}>{icon}</Suspense>
      <Typography color="textPrimary" variant="subtitle1">
        {capitalize(label)}
      </Typography>
    </SWrapper>
  );
};

export default SidebarNavItem;
