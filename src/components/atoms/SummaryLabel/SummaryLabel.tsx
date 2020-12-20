import React from 'react';
import { Typography } from '@material-ui/core';
import { HistoryLabelProps } from '../../../models/HistoryLabelProps';

const getLabel = (company) => {
  company === 'PayPal' ? (
    <Typography align="left" variant="subtitle2" display="block">
      Deposit PayPal
    </Typography>
  ) : (
    <Typography align="left" variant="subtitle2" display="block">
      Deposit from {company}
    </Typography>
  );
};

const HistoryLabel: React.FC<HistoryLabelProps> = (
  props: HistoryLabelProps,
) => {
  let content;
  if (props.isCancelled) {
    content = (
      <Typography align="left" variant="subtitle2" display="block">
        Cancelled
      </Typography>
    );
  } else {
    content = getLabel(props.company);
  }

  return <HistoryLabel>{content}</HistoryLabel>;
};

export default HistoryLabel;
