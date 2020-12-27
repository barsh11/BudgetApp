// pls add test using jest for it

const capitalize = (str: string) => {
  const splitStr = str.split(' ');
  for (let i = 0; i < splitStr.length; i += 1) {
    splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);
  }
  return splitStr.join(' ');
};

export default capitalize;
