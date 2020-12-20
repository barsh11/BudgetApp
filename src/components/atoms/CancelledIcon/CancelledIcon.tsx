import React from 'react';
import CancelIcon from '@material-ui/icons/Cancel';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconStyle: {
    color: '#ff7b7d',
  },
});

const CancelledIcon: React.FC = () => {
  const classes = useStyles();

  return <CancelIcon className={classes.iconStyle} />;
};

export default CancelledIcon;
