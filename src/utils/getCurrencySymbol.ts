import Symbol from '../containers/enums/CurrenciesSymbol';

const getCurrencySymbol = (currency: string) => (<any>Symbol)[currency];

export default getCurrencySymbol;
