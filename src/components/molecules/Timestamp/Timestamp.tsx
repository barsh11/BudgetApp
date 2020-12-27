import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import ClockIcon from '../../atoms/ClockIcon/ClockIcon';
import CalenderIcon from '../../atoms/CalenderIcon/CalendarIcon';

export type TimestampProps = TypographyProps & {
  time: string;
  date: string;
};

const useStyles = makeStyles({
  labelStyle: {
    color: 'var(--color-grey-light)',
  },
});

const SWrapper = styled.div`
  display: flex;
  justify-content: space-around;

  align-self: flex-start;

  margin-top: 0.5rem;
  width: 90%;
`;

const STimeWrapper = styled.div`
  display: flex;
  width: 45%;
`;

const SDateWrapper = styled.div`
  display: flex;
  width: 45%;
`;

const Timestamp: React.FC<TimestampProps> = ({ time, date }) => {
  const classes = useStyles();

  return (
    <SWrapper>
      <STimeWrapper>
        <ClockIcon />
        <Typography className={classes.labelStyle} variant="subtitle1">
          {time}
        </Typography>
      </STimeWrapper>
      <SDateWrapper>
        <CalenderIcon />
        <Typography className={classes.labelStyle} variant="subtitle1">
          {date}
        </Typography>
      </SDateWrapper>
    </SWrapper>
  );
};

export default Timestamp;
