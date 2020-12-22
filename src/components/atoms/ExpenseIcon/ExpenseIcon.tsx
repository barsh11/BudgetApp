import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles({
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: 'var(--color-white)',
    fill: 'var(--color-grey-dark)',
  },
});

const ExpenseIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <UndoOutlinedIcon className={classes.iconStyle} />;
};

export default ExpenseIcon;
