import { useState } from 'react';

const useLocation = (): [
  { lat: Number; lng: Number; company: string } | null,
  (lat: Number, lng: Number, company: string) => void,
  () => void
] => {
  const [currLoc, setCurrLoc] = useState<{ lat: Number; lng: Number; company: string } | null>(null);

  const updateLoc = (lat: Number, lng: Number, company: string) => {
    setCurrLoc({ lat, lng, company });
  };

  const cancelLoc = () => {
    setCurrLoc(null);
  };

  return [currLoc, updateLoc, cancelLoc];
};

export default useLocation;
