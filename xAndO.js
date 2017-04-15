function XO(str) {
  let arr = str.split('');
  let o = arr.filter(v => v.toLowerCase() === 'o');
  let x = arr.filter(v => v.toLowerCase() === 'x');
  return x.length === o.length ? true : false;
}
