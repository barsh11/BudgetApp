import React from 'react';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core';

export type UserImgProps = AvatarProps & {
  imgSrc: string;
};

const useStyle = makeStyles({
  imgStyle: {
    height: '5rem',
    width: '5rem',
  },
});

const UserImg: React.FC<UserImgProps> = ({ imgSrc }) => {
  const classes = useStyle();

  return <Avatar className={classes.imgStyle} alt="User Image" src={imgSrc} />;
};

export default UserImg;
