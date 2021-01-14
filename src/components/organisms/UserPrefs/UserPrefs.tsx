import React from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Select, { SelectProps } from '@material-ui/core/Select';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';

type UserPrefsProps = InputLabelProps &
  MenuItemProps &
  SelectProps &
  FormControlProps &
  TypographyProps & {
    currencyList: string[];
    handleChange: (event: React.ChangeEvent<{ value: unknown }>) => void;
  };

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: '10rem',
    color: 'red',
    fill: 'black',
  },
  menuStyle: {
    color: theme.palette.grey.A200,
  },
  titleStyle: {
    marginBottom: '2rem',
  },
}));

const SWrapper = styled.div`
  height: 15%;
`;

const UserPrefs: React.FC<UserPrefsProps> = ({ currencyList, handleChange }) => {
  const classes = useStyles();
  const renderOption = (curr: string) => (
    <MenuItem className={classes.menuStyle} value={curr}>
      {curr}
    </MenuItem>
  );

  return (
    <SWrapper>
      <Typography className={classes.titleStyle} variant="h4" color="textSecondary">
        Preferences
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
        <Select className={classes.menuStyle} onChange={handleChange} label="Currency">
          {currencyList.map((el) => renderOption(el))}
        </Select>
      </FormControl>
    </SWrapper>
  );
};

export default UserPrefs;
