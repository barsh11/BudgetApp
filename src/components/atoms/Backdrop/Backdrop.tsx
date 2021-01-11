import React from 'react';
import BD, { BackdropProps as BDProps } from '@material-ui/core/Backdrop';
import { makeStyles } from '@material-ui/core';

type BackdropProps = BDProps & {
  clicked: Function;
};

const useStyle = makeStyles({
  backdropStyle: {
    zIndex: 200,
  },
});

const Backdrop: React.FC<BackdropProps> = ({ open, clicked }) => {
  const classes = useStyle();

  return <BD className={classes.backdropStyle} open={open} onClick={(e) => clicked(e)} />;
};
export default Backdrop;
