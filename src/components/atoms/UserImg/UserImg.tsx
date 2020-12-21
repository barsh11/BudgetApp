import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import { UserImgProps } from '../../../models/UserImgProps';

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
