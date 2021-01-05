import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A200,
    justifySelf: 'start',
    transition: '0.2s all',
    '&:hover': {
      transform: 'translateY(-0.2rem)',
      cursor: 'pointer',
    },
  },
}));

const ExitIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <HighlightOffIcon className={classes.iconStyle} fontSize="large" />;
};

export default ExitIcon;
