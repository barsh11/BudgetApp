import React from 'react';
import Typography from '@material-ui/core/Typography';
import { SummaryLabelProps } from '../../../models/SummaryLabelProps';

const getLabel = (company) => {
  company === 'PayPal' ? (
    <Typography>Deposit PayPal</Typography>
  ) : (
    <Typography>Deposit from {company}</Typography>
  );
};

const SummaryLabel: React.FC<SummaryLabelProps> = (
  props: SummaryLabelProps,
) => {
  let content;
  if (props.isCancelled) {
    content = <Typography>Cancelled</Typography>;
  } else {
    content = getLabel(props.company);
  }

  return (
    <SummaryLabel
      isCancelled={props.isCancelled}
      company={props.company || null}>
      {content}
    </SummaryLabel>
  );
};

export default SummaryLabel;
