import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardDateProps } from '../../../models/CardDateProps';

const useStyles = makeStyles({
  boxStyle: {
    color: 'var(--color-white)',
  },
});

const CardDate: React.FC<CardDateProps> = ({ cardDate }) => {
  const classes = useStyles();

  return (
    <Box className={classes.boxStyle} component="div">
      <Typography variant="subtitle1" align="right">
        VALID THRU
      </Typography>
      <Typography variant="h5" align="right">
        {cardDate}
      </Typography>
    </Box>
  );
};

export default CardDate;
