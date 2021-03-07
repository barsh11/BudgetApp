import React from 'react';
import { SvgIcon, SvgIconProps } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    borderRadius: '50%',
    padding: '0.3rem',
    backgroundColor: theme.palette.primary.main,
    stroke: theme.palette.common.white,
  },
}));

const PaypalIcon: React.FC<SvgIconProps> = () => {
  const classes = useStyles();

  return (
    <SvgIcon className={classes.iconStyle} color="primary" fontSize="large">
      <path d="M7.914 10.677h1.659c3.604 0 5.649-1.623 6.3-4.96 0.021-0.11 0.040-0.216 0.056-0.322 0.036-0.226 0.054-0.429 0.062-0.624 0.006-0.134 0.010-0.213 0.009-0.287-0.008-0.391-0.077-0.722-0.216-1.039-0.129-0.296-0.324-0.587-0.613-0.918-0.853-0.97-2.339-1.527-4.114-1.527h-5.653c-0.398 0-0.737 0.29-0.799 0.683l-1.020 6.571-1.269 8.185c-0.046 0.295 0.182 0.561 0.48 0.561h2.772l0.849-5.043c0.117-0.74 0.747-1.28 1.497-1.28zM17.017 6.090c-0.792 3.771-3.357 5.772-7.445 5.772h-1.658c-0.164 0-0.302 0.118-0.328 0.282l-1.105 6.856h2.907c0.348 0 0.645-0.253 0.699-0.597l0.029-0.15 0.555-3.514 0.036-0.194c0.054-0.344 0.351-0.597 0.699-0.597h0.44c2.85 0 5.081-1.158 5.733-4.506 0.268-1.38 0.132-2.534-0.562-3.352z" />
    </SvgIcon>
  );
};

export default PaypalIcon;