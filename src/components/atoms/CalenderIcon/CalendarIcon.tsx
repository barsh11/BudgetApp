import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import DateRangeOutlinedIcon from '@material-ui/icons/DateRangeOutlined';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-grey-dark)',
    marginRight: '1rem',
  },
});

const CalendarIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <DateRangeOutlinedIcon className={classes.iconStyle} />;
};

export default CalendarIcon;
