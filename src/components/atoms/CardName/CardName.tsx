import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { CardNameProps } from '../../../models/CardNameProps';

const CardName: React.FC<CardNameProps> = ({ cardName }) => (
  <Box component="div">
    <Typography variant="subtitle1" color="textPrimary">
      CARD HOLDER
    </Typography>
    <Typography variant="h5" color="textPrimary">
      {cardName}
    </Typography>
  </Box>
);

export default CardName;
