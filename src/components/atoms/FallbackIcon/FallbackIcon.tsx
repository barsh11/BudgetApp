import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import OutlinedFlagIcon from '@material-ui/icons/OutlinedFlag';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: 'var(--color-grey-light)',
    fill: 'var(--color-white)',
  },
});

const FallbackIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <OutlinedFlagIcon className={classes.iconStyle} fontSize="large" />;
};

export default FallbackIcon;
