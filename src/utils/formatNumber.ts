const formatNumber = (number: number) => number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

export default formatNumber;
