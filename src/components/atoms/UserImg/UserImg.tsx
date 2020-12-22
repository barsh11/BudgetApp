import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar, { AvatarProps } from '@material-ui/core/Avatar';

type UserImgProps = AvatarProps & {
  imgSrc: string;
};

const useStyles = makeStyles({
  imageStyle: {
    height: '5rem',
    width: '5rem',
  },
});

const UserImg: React.FC<UserImgProps> = ({ imgSrc }) => {
  const classes = useStyles();

  return <Avatar className={classes.imageStyle} alt="User Image" src={imgSrc} />;
};

export default UserImg;
