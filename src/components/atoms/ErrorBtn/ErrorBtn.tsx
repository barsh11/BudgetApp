import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Button, { ButtonProps } from '@material-ui/core/Button';

type ErrorBtnProps = ButtonProps & {
  clicked: Function;
};

const useStyle = makeStyles((theme) => ({
  btnStyle: {
    backgroundColor: theme.palette.secondary.main,
    width: '50%',
    margin: '0 auto',
    height: '3rem',
    color: theme.palette.common.white,
    position: 'relative',
    padding: '5px',
    '&:hover': {
      backgroundColor: theme.palette.secondary.main,
    },
    '@media only screen and (max-width: 56.25em)': {
      width: '70%',
    },
  },
}));

const ErrorBtn: React.FC<ErrorBtnProps> = ({ clicked }) => {
  const classes = useStyle();

  return (
    <Button className={classes.btnStyle} onClick={(e) => clicked(e)}>
      Try Again
    </Button>
  );
};

export default ErrorBtn;
