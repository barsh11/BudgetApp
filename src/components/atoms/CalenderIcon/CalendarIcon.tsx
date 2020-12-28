import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A200,
    marginRight: '0.5rem',
  },
}));

const CalendarIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <DateRangeOutlinedIcon className={classes.iconStyle} />;
};

export default CalendarIcon;
