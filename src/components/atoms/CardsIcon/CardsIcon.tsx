import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-white)',
    opacity: '0.6',
    '&:hover': {
      opacity: '1.0',
    },
  },
});

const CardsIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <CreditCardIcon className={classes.iconStyle} />;
};

export default CardsIcon;
