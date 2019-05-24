console.log('[Exercises 7] Perulangan - Play with Asterisks')


console.log('\n1. Menyusun Barisan Bintang')
for (var row=0; row<5; row++){
  console.log('*')
}

console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping')
for (var x=0; x<5; x++){
  var bintang= ''
  for (var y=0; y<5; y++){
    bintang +='*';
  }
  console.log(bintang)
}

console.log('\n3.Menyusun Barisan Tangga Bintang Dengan Nested Looping')
for (var a=0; a<=5; a++){
  var stars= ''
  for (var b=0; b<a; b++){
    stars +='*';
  }
  console.log(stars)
}