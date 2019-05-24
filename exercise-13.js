console.log('exercise 13 \n')

function xo(str) {
  var jumlahX = str.search ('x');
  var jumlahO = str.search ('o')
  if (jumlahX=jumlahO){
    return 'true'}
  else {
    return 'false'
  }
}

console.log(xo('xoxoxo')); 
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));
