import React from 'react';
import Typography from '@material-ui/core/Typography';
import { SummaryLabelProps } from '../../../models/SummaryLabelProps';

const getLabel = (company?: string, isCancelled?: boolean) => {
  if (isCancelled) return 'Cancelled';
  if (company === 'Paypal') return 'Deposit PayPal';
  return company ? `Deposit from ${company}` : '';
};

const SummaryLabel: React.FC<SummaryLabelProps> = ({ company, isCancelled = false }) => {
  const content = getLabel(company, isCancelled);

  return <Typography>{content}</Typography>;
};

export default SummaryLabel;
