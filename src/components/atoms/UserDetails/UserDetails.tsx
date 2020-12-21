import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { UserDetailsProps } from '../../../models/UserDetailsProps';

const useStyles = makeStyles({
  userNameStyle: {
    color: 'var(--color-black)',
  },
  userEmailStyle: {
    color: 'var(--color-grey-light)',
  },
});

const UserDetails: React.FC<UserDetailsProps> = ({ userName, userEmail }) => {
  const classes = useStyles();

  return (
    <Box component="div">
      <Typography className={classes.userNameStyle} variant="h4" align="center">
        {userName}
      </Typography>
      <Typography className={classes.userEmailStyle} variant="subtitle1" align="center">
        {userEmail}
      </Typography>
    </Box>
  );
};

export default UserDetails;
