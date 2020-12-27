import React from 'react';
import styled from 'styled-components';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import ExpensesInfo, { ExpensesInfoProps } from '../../molecules/ExpensesInfo/ExpensesInfo';
import Timestamp, { TimestampProps } from '../../molecules/Timestamp/Timestamp';
import capitalize from '../../../utils/capitalize';

type ExpensesCardProps = TypographyProps &
  ExpensesInfoProps &
  TimestampProps & {
    company: string;
  };

const SWrapper = styled.div`
  width: 25rem;
  height: 15rem;

  padding: 1.5rem 2rem;
  background-color: var(--color-white);
  border-radius: 1rem;
  position: relative;
  overflow: hidden;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const SLine = styled.div`
  height: 0.5rem;
  width: 100%;

  position: absolute;
  top: 0;
  left: 0;
  background-color: var(--color-forthtiary);
`;

const ExpensesCard: React.FC<ExpensesCardProps> = (props) => {
  const { data, company, time, date } = props;

  const content = <SLine>&nbsp;</SLine>;

  return (
    <SWrapper>
      {data.isRefund && content}
      <Typography variant="h5">{capitalize(company)}</Typography>
      <Timestamp time={time} date={date} />
      <ExpensesInfo data={data} />
    </SWrapper>
  );
};

export default ExpensesCard;
