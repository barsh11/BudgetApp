import React from 'react';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconStyle: {
    color: '#3a2d96',
  },
});

const IncomeIcon: React.FC = () => {
  const classes = useStyles();

  return <CheckCircleIcon className={classes.iconStyle} />;
};

export default IncomeIcon;
