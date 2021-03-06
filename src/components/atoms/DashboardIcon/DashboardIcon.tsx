import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const DashboardIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <DashboardOutlinedIcon className={classes.iconStyle} />;
};

export default DashboardIcon;
