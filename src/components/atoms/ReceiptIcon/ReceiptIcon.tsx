import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import IconButton, { IconButtonProps } from '@material-ui/core/IconButton';
import BeenhereIcon from '@material-ui/icons/Beenhere';
import { IconProps } from '@material-ui/core/Icon';

export type ReceiptIconProps = IconButtonProps &
  IconProps & {
    link: string;
  };

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.grey.A100,
  },
  btnStyle: {
    '&:hover, &:focus': {
      backgroundColor: 'transparent',
    },
  },
}));

const ReceiptIcon: React.FC<ReceiptIconProps> = ({ link }) => {
  const classes = useStyles();

  return (
    <IconButton className={classes.btnStyle} aria-label={link} onClick={() => window.open(link, '_blank', 'true')}>
      <BeenhereIcon className={classes.iconStyle} fontSize="large" />
    </IconButton>
  );
};

export default ReceiptIcon;
