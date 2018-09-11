module.exports = function check(str, bracketsConfig) {
  if (str.length < 1 || str.length % 2) return false;

  for (let i = str.length - 1; i >= 0; i--) {
    if (!str[i]) continue;
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (str[i] === bracketsConfig[j][1]) {
        str = str.replace(bracketsConfig[j].join(''), '');
      }
    }
  }

  return str ? false : true;
};
