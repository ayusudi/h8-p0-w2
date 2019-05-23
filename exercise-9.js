//---no.1---//
console.log('Tugas 1')
function shoutOut(){
return 'Halo Function!'
}
console.log(shoutOut())

//---no.2---//
console.log('\nTugas 2')
function calculateMultiply(){
  return numb1*numb2
}
var numb1 = 6;
var numb2 = 5;
var hasilPerkalian = calculateMultiply(numb1, numb2);

console.log (hasilPerkalian);

//---no.3---//
console.log('\nTugas 3')
function data () {
  return "Nama saya " + name + ", umur saya " + age + " tahun, alamat saya di " + adress + ", dan saya punya hobby yaitu " + hobby + "!"
}
var name= "Agus";
var age= 30;
var adress="Jln. Malioboro, Yogjakarta";
var hobby= "gaming";

var fullSentence = data (name, age, adress, hobby);
console.log (fullSentence);