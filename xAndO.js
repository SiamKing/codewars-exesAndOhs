function XO(str) {
  let arr = str.toLowerCase.split('');
  let o = arr.filter(v => v === 'o');
  let x = arr.filter(v => v === 'x');
  return x.length === o.length ? true : false;
}
