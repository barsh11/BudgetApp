import React from 'react';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { SummaryLabelProps } from '../../../models/SummaryLabelProps';

const getLabel = (company?: string, isCancelled?: boolean) => {
  if (isCancelled) return 'Cancelled';
  if (company === 'Paypal') return 'Deposit PayPal';
  return company ? `Deposit from ${company}` : '';
};

const SummaryLabel: React.FC<SummaryLabelProps> = ({ company, isCancelled = false, date }) => {
  const content = getLabel(company, isCancelled);

  return (
    <Box component="div">
      <Typography variant="body1">{content}</Typography>
      <Typography variant="body2">{date}</Typography>
    </Box>
  );
};

export default SummaryLabel;
