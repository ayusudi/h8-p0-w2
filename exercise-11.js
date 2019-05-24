function balikKata(kata) {
  var satuBaris = '';
  for ( var diBalik = kata.length-1; diBalik>=0; diBalik--){
    satuBaris = satuBaris + kata[diBalik]  
  }

return satuBaris;
}


console.log(balikKata('Hello World and Coders'));
console.log(balikKata('John Doe'))
console.log(balikKata('I am a bookworm'));
console.log(balikKata('Coding is my hobby'));
console.log(balikKata('Super'));