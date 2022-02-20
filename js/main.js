const getIntegerNumber = function(min, max) {
  if(min === max || min > max || min < 0 || max < 0) {
    return RangeError('Получены недопустимые значения');
  }
  return Math.floor(Math.random() * (max - min + 1) ) + min;
};

const getNumber = function(min, max, drop) {
  if(min === max || min > max || min < 0 || max < 0 || drop < 0) {
    return RangeError('Получены недопустимые значения');
  }
  return (((Math.random() * (max - min + 1) ) + min).toFixed(drop)) / 1;
};

getIntegerNumber(5, 3);
getNumber(5, 3, 2);
