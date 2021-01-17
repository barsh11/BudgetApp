import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Box, { BoxProps } from '@material-ui/core/Box';

export type ErrorInfoProps = BoxProps &
  TypographyProps & {
    errorMsg: string | null;
  };

const useStyles = makeStyles((theme) => ({
  errorMsgStyle: {
    color: theme.palette.grey.A200,
    marginTop: '0.6rem',
  },
  boxStyle: {
    position: 'relative',
    zIndex: 201,
  },
  titleStyle: {
    '@media only screen and (max-width: 56.25em)': {
      fontSize: '2rem',
    },
    '@media only screen and (max-width: 22em)': {
      fontSize: '1.5rem',
    },
  },
}));

const ErrorInfo: React.FC<ErrorInfoProps> = ({ errorMsg }) => {
  const classes = useStyles();

  return (
    <Box className={classes.boxStyle} component="div">
      <Typography className={classes.titleStyle} variant="h4" align="center" color="textSecondary">
        Whoops!
      </Typography>
      <Typography className={classes.errorMsgStyle} variant="h6" align="center">
        {errorMsg}
      </Typography>
    </Box>
  );
};

export default ErrorInfo;
