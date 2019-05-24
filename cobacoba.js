console.log('cara ngebalik kata\n');

var col= 'hasil :';
var kata = 'cobacoba';
for (var i = kata.length-1; i >= 0; i--){
    col = col + kata[i]
}

console.log(col);
console.log('\nvar col untuk buat "kata" yg mau dibalik dalam satu baris dgn cara col diganti..');