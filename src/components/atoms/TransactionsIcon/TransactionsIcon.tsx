import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const TransactionsIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <SwapHorizIcon className={classes.iconStyle} />;
};

export default TransactionsIcon;
