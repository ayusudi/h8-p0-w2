console.log('[Exercises 7] Perulangan - Play with Asterisks')


console.log('\n1. Menyusun Barisan Bintang')
for (row=1; row<=5; row++){
  console.log('*')
}

console.log('\n2. Menyusun Barisan Bintang Dengan Nested Looping')
for (var x=1; x<=5; x++){
  var bintang= ''
  for (var y=1; y<=5; y++){
    bintang +='*';
  }
  console.log(bintang)
}

console.log('\n3.Menyusun Barisan Tangga Bintang Dengan Nested Looping')
for (var a=1; a<=5; a++){
  var stars= ''
  for (var b=1; b<=a; b++){
    stars +='*';
  }
  console.log(stars)
}