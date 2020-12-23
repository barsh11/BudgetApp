import React, { Suspense } from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import FallbackIcon from '../../atoms/FallbackIcon/FallbackIcon';

const CardsIcon = React.lazy(() => import('../../atoms/CardsIcon/CardsIcon'));
const DashboardIcon = React.lazy(() => import('../../atoms/DashboardIcon/DashboardIcon'));
const SidebarExpenseIcon = React.lazy(() => import('../../atoms/SidebarExpenseIcon/SidebarExpenseIcon'));
const SidebarIncomeIcon = React.lazy(() => import('../../atoms/SidebarIncomeIcon/SidebarIncomeIcon'));

type SidebarNavItemProps = TypographyProps & {
  label: 'cards' | 'dashboard' | 'expenses' | 'incomes';
};

const SWrapper = styled.div`
  display: flex;
  align-items: center;

  opacity: 0.6;

  &:hover {
    opacity: 1;
  }

  width: 10%;
`;

const getItemIcon = (label: 'cards' | 'dashboard' | 'expenses' | 'incomes') => {
  switch (label) {
    case 'cards':
      return <CardsIcon />;
    case 'expenses':
      return <SidebarExpenseIcon />;
    case 'incomes':
      return <SidebarIncomeIcon />;
    default:
      return <DashboardIcon />;
  }
};

const SidebarNavItem: React.FC<SidebarNavItemProps> = ({ label }) => {
  const icon = getItemIcon(label);

  return (
    <SWrapper>
      <Suspense fallback={<FallbackIcon location="sidebar" />}>{icon}</Suspense>
      <Typography color="textPrimary" variant="h6">
        {label.toUpperCase()}
      </Typography>
    </SWrapper>
  );
};

export default SidebarNavItem;
