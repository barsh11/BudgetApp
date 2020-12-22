import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CreditCardIcon from '@material-ui/icons/CreditCard';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-white)',
    opacity: '0.6',
    '&:hover': {
      opacity: '1.0',
    },
  },
});

const CardsIcon: React.FC = () => {
  const classes = useStyles();

  return <CreditCardIcon className={classes.iconStyle} />;
};

export default CardsIcon;
