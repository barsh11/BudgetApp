import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

type SummaryLabelProps = BoxProps &
  TypographyProps & {
    isCancelled?: boolean;
    company?: string;
    date: string;
  };

const useStyles = makeStyles({
  box: {
    margin: '0.7rem',
  },
  description: {
    color: 'var(--color-grey-dark)',
  },
  date: {
    color: 'var(--color-grey-light)',
  },
});

const getLabel = (company?: string, isCancelled?: boolean) => {
  if (isCancelled) return 'Cancelled';
  if (company === 'Paypal') return 'Deposit PayPal';
  return company ? `Deposit from ${company}` : '';
};

const SummaryLabel: React.FC<SummaryLabelProps> = ({ company, isCancelled, date }) => {
  const classes = useStyles();
  const content = getLabel(company, isCancelled);

  return (
    <Box className={classes.box} component="div">
      <Typography className={classes.description} variant="subtitle1">
        {content}
      </Typography>
      <Typography className={classes.date} variant="body2">
        {date}
      </Typography>
    </Box>
  );
};

export default SummaryLabel;
