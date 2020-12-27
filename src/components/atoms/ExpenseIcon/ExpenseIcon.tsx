import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import UndoOutlinedIcon from '@material-ui/icons/UndoOutlined';
import { IconProps } from '@material-ui/core/Icon';

// do you now anpther way importing variables?
// there is theme availabe for you for that
// const useStyles = makeStyles((theme) => ({
const useStyles = makeStyles({
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: 'var(--color-white)',
    fill: 'var(--color-grey-dark)',
    // whatever: theme.palette.error
  },
});
// }));

const ExpenseIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <UndoOutlinedIcon className={classes.iconStyle} fontSize="large" />;
};

export default ExpenseIcon;
