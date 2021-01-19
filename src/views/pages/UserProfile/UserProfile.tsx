import React, { useContext } from 'react';
import styled from 'styled-components';
import { AppContext, AppDispatchContext } from '../../../contexts/AppContext';
import FavoritesList from '../../../components/organisms/FavoritesList/FavoritesList';
import UserPrefs from '../../../components/organisms/UserPrefs/UserPrefs';

const SWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.2rem 3.2rem 3.2rem 5.2rem;

  @media only screen and (max-width: 22em) {
    padding: 3.2rem;
  }
`;

const UserProfile: React.FC = () => {
  const app = useContext(AppContext);
  const setApp = useContext(AppDispatchContext);

  const onCurrChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newApp = { ...app };
    newApp.currency = event.target.value as string;
    setApp(newApp);
  };

  return (
    <SWrapper>
      <FavoritesList />
      <UserPrefs currencyList={Object.keys(app.currencyRates)} handleChange={onCurrChange} />
    </SWrapper>
  );
};

export default UserProfile;
