import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardDateProps } from '../../../models/CardDateProps';

const CardDate: React.FC<CardDateProps> = ({ cardDate }) => (
  <Box component="div">
    <Typography variant="subtitle1" align="right" color="textPrimary">
      VALID THRU
    </Typography>
    <Typography variant="h5" align="right" color="textPrimary">
      {cardDate}
    </Typography>
  </Box>
);

export default CardDate;
