const getCurrencySymbol = (currency: string) => {
  switch (currency) {
    case 'NIS':
      return '\u20AA';
    default:
      return '$';
  }
};

export default getCurrencySymbol;
