import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DashboardOutlinedIcon from '@material-ui/icons/DashboardOutlined';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-white)',
    opacity: '0.6',
    '&:hover': {
      opacity: '1.0',
    },
  },
});

const DashboardIcon: React.FC = () => {
  const classes = useStyles();

  return <DashboardOutlinedIcon className={classes.iconStyle} />;
};

export default DashboardIcon;
