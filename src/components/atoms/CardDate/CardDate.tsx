import React from 'react';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

type CardDateProps = BoxProps &
  TypographyProps & {
    cardDate: string;
  };

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
