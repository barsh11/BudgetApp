import React, { useContext } from 'react';
import styled from 'styled-components';
import { UserContext } from '../../contexts/UserContext';
import SummaryUserInfo from '../../components/molecules/SummaryUserInfo/SummaryUserInfo';
import SummaryList from '../../components/organisms/SummaryList/SummaryList';

const SWrapper = styled.div`
  background-color: var(--color-tertiary);
  border-radius: 0 2rem 2rem 0;
  padding-top: 3.2rem;
  padding-right: 1.5rem;
  padding-left: 1.5rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;

  height: 68.2rem;
`;

const Summary: React.FC = () => {
  const imgSrc = useContext(UserContext).avatar;
  const userName = `${useContext(UserContext).firstName} ${useContext(UserContext).lastName}`;
  const userEmail = useContext(UserContext).email;

  return (
    <SWrapper>
      <SummaryUserInfo imgSrc={imgSrc} userName={userName} userEmail={userEmail} />
      <SummaryList />
    </SWrapper>
  );
};

export default Summary;
