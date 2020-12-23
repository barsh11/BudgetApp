import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import { IconProps } from '@material-ui/core/Icon';

type FallbackIconProps = IconProps & {
  location: 'sidebar' | 'summary';
};

const useStyles = makeStyles({
  summaryStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: 'var(--color-grey-light)',
    fill: 'var(--color-white)',
  },
  sidebarStyle: {
    fill: 'var(--color-white)',
    marginRight: '1rem',
  },
});

const FallbackIcon: React.FC<FallbackIconProps> = ({ location }: FallbackIconProps) => {
  const classes = useStyles();

  switch (location) {
    case 'summary':
      return <OutlinedFlagIcon className={classes.summaryStyle} fontSize="large" />;
    default:
      // 'sidebar'
      return <OutlinedFlagIcon className={classes.sidebarStyle} fontSize="large" />;
  }
};

export default FallbackIcon;
