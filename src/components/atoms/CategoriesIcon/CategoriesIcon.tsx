import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import CategoryIcon from '@material-ui/icons/Category';
import { IconProps } from '@material-ui/core/Icon';

const useStyles = makeStyles((theme) => ({
  iconStyle: {
    fill: theme.palette.common.white,
    marginRight: '1rem',
  },
}));

const CategoriesIcon: React.FC<IconProps> = () => {
  const classes = useStyles();

  return <CategoryIcon className={classes.iconStyle} />;
};

export default CategoriesIcon;
