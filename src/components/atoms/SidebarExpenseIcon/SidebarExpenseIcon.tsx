import React from 'react';
import { SvgIcon } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  iconStyle: {
    fill: 'var(--color-white)',
    opacity: '0.6',
    '&:hover': {
      opacity: '1.0',
    },
  },
});

const SidebarExpenseIcon: React.FC = () => {
  const classes = useStyles();

  return (
    <SvgIcon className={classes.iconStyle}>
      <path d="M5 20v-7c0-0.829 0.335-1.577 0.879-2.121s1.292-0.879 2.121-0.879h9.586l-3.293 3.293c-0.391 0.391-0.391 1.024 0 1.414s1.024 0.391 1.414 0l5-5c0.092-0.092 0.166-0.202 0.217-0.324 0.101-0.245 0.101-0.521 0-0.766-0.049-0.118-0.121-0.228-0.217-0.324l-5-5c-0.391-0.391-1.024-0.391-1.414 0s-0.391 1.024 0 1.414l3.293 3.293h-9.586c-1.38 0-2.632 0.561-3.536 1.464s-1.464 2.156-1.464 3.536v7c0 0.552 0.448 1 1 1s1-0.448 1-1z" />
    </SvgIcon>
  );
};

export default SidebarExpenseIcon;
