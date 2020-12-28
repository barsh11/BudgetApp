import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

export type UserDetailsProps = BoxProps &
  TypographyProps & {
    userName: string;
    userEmail: string;
  };

const useStyles = makeStyles((theme) => ({
  boxStyle: {
    marginTop: '1rem',
  },
  userEmailStyle: {
    color: theme.palette.grey.A100,
  },
}));

const UserDetails: React.FC<UserDetailsProps> = ({ userName, userEmail }) => {
  const classes = useStyles();

  return (
    <Box component="div" className={classes.boxStyle}>
      <Typography variant="h5" align="center" color="textSecondary">
        {userName}
      </Typography>
      <Typography className={classes.userEmailStyle} variant="subtitle1" align="center">
        {userEmail}
      </Typography>
    </Box>
  );
};

export default UserDetails;
