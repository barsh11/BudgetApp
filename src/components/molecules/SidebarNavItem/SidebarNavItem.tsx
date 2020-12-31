import React, { Suspense } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';
import capitalize from '../../../utils/capitalize';

const DashboardIcon = React.lazy(() => import('../../atoms/DashboardIcon/DashboardIcon'));
const TransactionsIcon = React.lazy(() => import('../../atoms/TransactionsIcon/TransactionsIcon'));
const UserIcon = React.lazy(() => import('../../atoms/UserIcon/UserIcon'));
const ChartsIcon = React.lazy(() => import('../../atoms/ChartsIcon/ChartsIcon'));
const CategoriesIcon = React.lazy(() => import('../../atoms/CategoriesIcon/CategoriesIcon'));

export type SidebarNavItemProps = TypographyProps & {
  label: 'dashboard' | 'transactions' | 'user profile' | 'charts' | 'categories';
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
    case 'transactions':
      return <TransactionsIcon />;
    case 'user profile':
      return <UserIcon />;
    case 'charts':
      return <ChartsIcon />;
    case 'categories':
      return <CategoriesIcon />;
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
