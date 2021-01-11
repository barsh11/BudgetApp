import React from 'react';
import Loader from '../../atoms/Loader/Loader';
import Backdrop from '../../atoms/Backdrop/Backdrop';

const GeneralLoader: React.FC = () => (
  <>
    <Loader />
    <Backdrop open clicked={() => {}} />
  </>
);

export default GeneralLoader;
