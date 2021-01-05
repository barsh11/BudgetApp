import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

type SummaryLabelProps = BoxProps &
  TypographyProps & {
    isCancelled?: boolean;
    company?: string;
    date: string;
    clicked: Function;
  };

const useStyles = makeStyles((theme) => ({
  box: {
    margin: '0.7rem',
  },
  description: {
    color: theme.palette.grey.A200,
  },
  date: {
    color: theme.palette.grey.A100,
  },
}));

const getLabel = (company?: string, isCancelled?: boolean) => {
  if (isCancelled) return 'Cancelled';
  if (company === 'Paypal') return 'Deposit PayPal';
  return company ? `Deposit from ${company}` : '';
};

const SummaryLabel: React.FC<SummaryLabelProps> = ({ company, isCancelled, date, clicked }) => {
  const classes = useStyles();
  const content = getLabel(company, isCancelled);

  return (
    <Box
      className={classes.box}
      component="div"
      onClick={(e) => clicked((e.target as HTMLElement).closest('.summaryItem'))}
    >
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
