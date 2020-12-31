import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import PersonIcon from '@material-ui/icons/Person';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const UserIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <PersonIcon className={classes.iconStyle} />;
};

export default UserIcon;
