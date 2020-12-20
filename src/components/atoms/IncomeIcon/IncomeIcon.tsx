import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconStyle: {
    color: 'var(--color-primary)',
  },
});

const IncomeIcon: React.FC = () => {
  const classes = useStyles();

  return <CheckCircleIcon className={classes.iconStyle} />;
};

export default IncomeIcon;
