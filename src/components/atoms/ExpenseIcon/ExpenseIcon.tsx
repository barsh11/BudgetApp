import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import { IconProps } from '@material-ui/core/Icon';

type ExpenseIconProps = IconProps & {
  location: 'dashboard' | 'summary';
};

const useStyles = makeStyles((theme) => ({
  summaryStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: theme.palette.common.white,
    fill: theme.palette.grey.A200,
  },
  dashboardStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: 'var(--color-forthtiary)',
    fill: theme.palette.common.white,
  },
}));

const ExpenseIcon: React.FC<ExpenseIconProps> = ({ location }) => {
  const classes = useStyles();

  return (
    <UndoOutlinedIcon
      className={location === 'summary' ? classes.summaryStyle : classes.dashboardStyle}
      fontSize="large"
    />
  );
};

export default ExpenseIcon;
