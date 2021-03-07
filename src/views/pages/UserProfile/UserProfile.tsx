import React from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import FavoritesList from '../../../components/organisms/FavoritesList/FavoritesList';
import UserPrefs from '../../../components/organisms/UserPrefs/UserPrefs';
import useLocation from '../../../hooks/useLocation';
import ExitIcon from '../../../components/atoms/ExitIcon/ExitIcon';
import Mapbox from '../../../components/organisms/Mapbox/Mapbox';

const SWrapper = styled.div`
  height: 100%;
  width: 100%;
  padding: 3.2rem 3.2rem 3.2rem 5.2rem;

  @media only screen and (max-width: 22em) {
    padding: 3.2rem;
  }
`;

const UserProfile: React.FC = () => {
  const [loc, updateLoc, cancelLoc] = useLocation();
  const history = useHistory();

  const mapCancelledHandler = () => {
    cancelLoc();
    history.replace('/user-profile');
  };

  let content = (
    <SWrapper>
      <FavoritesList updateLoc={updateLoc} />
      <UserPrefs />
    </SWrapper>
  );

  if (loc) {
    content = (
      <>
        <ExitIcon clicked={mapCancelledHandler} />
        <Mapbox lat={loc.lat} lng={loc.lng} company={loc.company} />
      </>
    );
  }

  return content || <></>;
};

export default UserProfile;
