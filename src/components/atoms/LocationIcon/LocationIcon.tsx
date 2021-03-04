import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MapIcon from '@material-ui/icons/Map';
import { IconProps } from '@material-ui/core/Icon';

type LocationIconProps = IconProps & {
  clicked: Function;
};

const useStyles = makeStyles(() => ({
  iconStyle: {
    marginLeft: '1rem',
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const LocationIcon: React.FC<LocationIconProps> = ({ clicked }) => {
  const classes = useStyles();

  return <MapIcon className={classes.iconStyle} onClick={(e) => clicked(e)} />;
};

export default LocationIcon;
