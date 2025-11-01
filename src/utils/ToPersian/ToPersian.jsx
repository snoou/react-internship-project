function ToPersian(input) {
  if (input === null || input === undefined) return '';
  const map = {
    0: '۰',
    1: '۱',
    2: '۲',
    3: '۳',
    4: '۴',
    5: '۵',
    6: '۶',
    7: '۷',
    8: '۸',
    9: '۹',
  };
  return String(input).replace(/[0-9]/g, (d) => map[d]);
}

export default ToPersian;
