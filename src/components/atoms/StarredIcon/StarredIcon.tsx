import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import StarOutlineIcon from '@material-ui/icons/StarOutline';
import StarIcon from '@material-ui/icons/Star';
import { IconProps } from '@material-ui/core/Icon';

type StarProps = IconProps & {
  isStarred: boolean;
  clicked: Function;
};

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A200,
    '&:hover': {
      cursor: 'pointer',
    },
  },
}));

const StarredIcon: React.FC<StarProps> = ({ isStarred, clicked }) => {
  const classes = useStyles();

  return isStarred ? (
    <StarIcon className={classes.iconStyle} fontSize="large" onClick={(e) => clicked(e)} />
  ) : (
    <StarOutlineIcon className={classes.iconStyle} fontSize="large" onClick={(e) => clicked(e)} />
  );
};
export default StarredIcon;
