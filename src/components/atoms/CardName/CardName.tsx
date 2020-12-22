import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardNameProps } from '../../../models/CardNameProps';

const useStyles = makeStyles({
  boxStyle: {
    color: 'var(--color-white)',
  },
});

const CardName: React.FC<CardNameProps> = ({ cardName }) => {
  const classes = useStyles();

  return (
    <Box className={classes.boxStyle} component="div">
      <Typography variant="subtitle1">CARD HOLDER</Typography>
      <Typography variant="h5">{cardName}</Typography>
    </Box>
  );
};

export default CardName;
