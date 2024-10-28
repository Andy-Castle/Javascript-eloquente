console.log(new Date());

console.log(new Date(2009, 11, 9));

console.log(new Date(2009, 11, 9, 12, 59, 59, 999));

//los mesese comienzan en 0 asi que diciembre es 11
//pero los dias si comienzan en 1

console.log(new Date(2013, 11, 19).getTime());

console.log(new Date(1387432800000));

function getDate(string) {
  let [_, month, day, year] = /(\d{1,2})-(\d{1,2})-(\d{4})/.exec(string);
  return new Date(year, month - 1, day);
}

console.log(getDate("1-30-2003"));
