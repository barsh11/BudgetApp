import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A200,
    marginRight: '0.5rem',
  },
}));

const ClockIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <AccessTimeIcon className={classes.iconStyle} />;
};

export default ClockIcon;
