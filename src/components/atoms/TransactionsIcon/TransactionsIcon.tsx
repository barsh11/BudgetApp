import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const TransactionsIcon: React.FC<SvgIconProps> = () => {
  const classes = useStyles();

  return (
    <SvgIcon className={classes.iconStyle}>
      <path d="M14 5h-10v-2l-4 3.5 4 3.5v-2h10v-3zM20 13.5l-4-3.5v2h-10v3h10v2l4-3.5z" />
    </SvgIcon>
  );
};

export default TransactionsIcon;
