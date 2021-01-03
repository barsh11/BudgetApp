import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';

export type UserImgProps = AvatarProps & {
  imgSrc: string;
};

const useStyles = makeStyles((theme) => ({
  imageStyle: {
    [theme.breakpoints.up('xl')]: {
      height: '5rem',
      width: '5rem',
    },
    [theme.breakpoints.up('lg')]: {
      height: '4rem',
      width: '4rem',
    },
  },
}));

const UserImg: React.FC<UserImgProps> = ({ imgSrc }) => {
  const classes = useStyles();

  return <Avatar className={classes.imageStyle} alt="User Image" src={imgSrc} />;
};

export default UserImg;
