import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-white)',
    marginRight: '1rem',
  },
});

const CardsIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <CreditCardIcon className={classes.iconStyle} fontSize="large" />;
};

export default CardsIcon;
