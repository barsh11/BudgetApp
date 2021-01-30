import React, { useContext } from 'react';
import styled from 'styled-components';
import { makeStyles } from '@material-ui/core/styles';
import InputLabel, { InputLabelProps } from '@material-ui/core/InputLabel';
import FormControl, { FormControlProps } from '@material-ui/core/FormControl';
import Typography, { TypographyProps } from '@material-ui/core/Typography';
import Select, { SelectProps } from '@material-ui/core/Select';
import { AppContext, AppDispatchContext } from '../../../contexts/AppContext';

type UserPrefsProps = InputLabelProps & SelectProps & FormControlProps & TypographyProps;

const useStyles = makeStyles((theme) => ({
  formControl: {
    width: '10rem',
    color: 'red',
    fill: 'black',
  },
  menuStyle: {
    color: theme.palette.grey.A200,
  },
  titleStyle: {
    marginBottom: '1rem',
  },
}));

const SWrapper = styled.div`
  height: 15%;
`;

const UserPrefs: React.FC<UserPrefsProps> = () => {
  const classes = useStyles();
  const app = useContext(AppContext);
  const setApp = useContext(AppDispatchContext);

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const newApp = { ...app };
    setApp({ ...newApp, currency: event.target.value as typeof app.currency });
  };

  const renderOption = (curr: string) => (
    <option key={curr} className={classes.menuStyle} value={curr}>
      {curr}
    </option>
  );

  return (
    <SWrapper>
      <Typography className={classes.titleStyle} variant="h4" color="textSecondary">
        Preferences
      </Typography>
      <FormControl variant="outlined" className={classes.formControl}>
        <InputLabel id="demo-simple-select-outlined-label">Currency</InputLabel>
        <Select native value={app.currency} onChange={handleChange} label="Currency">
          {Object.keys(app.currencyRates).map((el) => renderOption(el))}
        </Select>
      </FormControl>
    </SWrapper>
  );
};

export default UserPrefs;
