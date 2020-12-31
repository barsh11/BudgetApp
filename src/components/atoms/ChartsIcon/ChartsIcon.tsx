import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BarChartIcon from '@material-ui/icons/BarChart';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const ChartsIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <BarChartIcon className={classes.iconStyle} />;
};

export default ChartsIcon;
