import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import HighlightOffIcon from '@material-ui/icons/HighlightOff';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A200,
  },
}));

const ExitIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <HighlightOffIcon className={classes.iconStyle} />;
};

export default ExitIcon;
