const formatNumber = (number: number) =>
  number
    .toFixed(2)
    .toString()
    .replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',')
    .replace(/\.00/, '');
export default formatNumber;
