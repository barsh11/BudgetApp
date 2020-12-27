// pls add test using jest for it

const formatNumber = (number: number) => number.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ',');

export default formatNumber;
