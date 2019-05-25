//Cara Pertama//
console.log('exercise 13, cara I \n')

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

//Cara Kedua//
console.log ('\nexercise 13, cara II\n')

function xo(strr) {
var hurufX = 0;
var hurufO = 0;

for (var i = 0; i <= strr.length; i++){
  if (strr[i] === 'x') {
    hurufX+=1;
  }
  else if (strr[i] === 'o') {
    hurufO+=1;
  }
}
return hurufX===hurufO
}

console.log(xo('xoxoxo')); 
console.log(xo('oxooxo'));
console.log(xo('oxo'));
console.log(xo('xxxooo'));
console.log(xo('xoxooxxo'));