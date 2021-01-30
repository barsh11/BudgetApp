import React from 'react';
import styled from 'styled-components';
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

const UserProfile: React.FC = () => (
  <SWrapper>
    <FavoritesList />
    <UserPrefs />
  </SWrapper>
);

export default UserProfile;
