const toTwo = function (x) {
  x = x + '';
  return ('00' + x).substring(x.length);
};

const formatDate = function (date, fmt) {
  return fmt.replace(/(y+)/i, ($$, $1) => {
    return (date.getFullYear() + '').substring(4 - $1.length);
  }).replace(/mm/i, () => {
    return toTwo(date.getMonth() + 1);
  }).replace(/dd/i, () => {
    return toTwo(date.getDate());
  }).replace(/hh/i, () => {
    return toTwo(date.getHours());
  }).replace(/mm/i, () => {
    return toTwo(date.getMinutes());
  }).replace(/ss/i, () => {
    return toTwo(date.getSeconds());
  });
};

export {
  formatDate
};
