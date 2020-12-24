import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-grey-light)',
  },
});

const ReceiptIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <BeenhereIcon className={classes.iconStyle} fontSize="large" />;
};

export default ReceiptIcon;
