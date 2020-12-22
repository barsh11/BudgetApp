import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

type CardNameProps = BoxProps &
  TypographyProps & {
    cardName: string;
  };

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
