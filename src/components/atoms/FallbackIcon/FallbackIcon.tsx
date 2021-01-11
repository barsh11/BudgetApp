import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import { IconProps } from '@material-ui/core/Icon';

type FallbackIconProps = IconProps & {
  location: 'sidebar' | 'summary' | 'dashboard';
};

const useStyles = makeStyles((theme) => ({
  summaryStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: theme.palette.grey.A100,
    fill: theme.palette.common.white,
  },
  sidebarStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
  dashboardStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: theme.palette.grey.A100,
    fill: theme.palette.common.white,
  },
}));

const FallbackIcon: React.FC<FallbackIconProps> = ({ location }: FallbackIconProps) => {
  const classes = useStyles();

  switch (location) {
    case 'summary':
      return <OutlinedFlagIcon className={classes.summaryStyle} fontSize="large" />;
    case 'dashboard':
      return <OutlinedFlagIcon className={classes.dashboardStyle} fontSize="large" />;
    default:
      // 'sidebar'
      return <OutlinedFlagIcon className={classes.sidebarStyle} fontSize="large" />;
  }
};

export default FallbackIcon;
