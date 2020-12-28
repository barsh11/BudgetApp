import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: theme.palette.common.white,
    fill: theme.palette.grey.A200,
  },
}));

const ExpenseIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <UndoOutlinedIcon className={classes.iconStyle} fontSize="large" />;
};

export default ExpenseIcon;
