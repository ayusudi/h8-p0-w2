//--no. 1--//
console.log('1. Melakukan Looping Menggunakan While\n')
console.log('LOOPING PERTAMA')
var number= 0;
while (number<=20) {
if (number%2==0){
  console.log(number +' - I love coding');
  }number++;
}
console.log('lOOPING KEDUA')
var number1=20;
while(number1>=2) {
  if (number1%2==0){
    console.log(number1 +' - I will become fullstack developer');
  }number1--;
}
//--no. 2--//
console.log ('\n\n2. Melakukan Looping Menggunakan For\n')
console.log ('LOOPING PERTAMA')
for (var i=1; i<=20; i++)  
  console.log(i + ' - I love coding')
 
console.log('LOOPING KEDUA')
for (var i= 20; i>=1; i--)
  console.log(i + ' - I will become fullstack developer')
  
//--no.3--//
console.log('\n\n3. Angka Ganjil dan Genap')

//1-100//
console.log('Perulangan 1-100')
var counter=1;
while (counter<=100)
{
  console.log(counter); 
  counter++;
}

//ganjil genap//
console.log('\nGanjil-Genap')
var counter=1;
while (counter<=100){
    if (counter%2==0){
      console.log(counter + " - GENAP");
    }
    else {
      console.log(counter +" - GANJIL");
    }
  counter++;
}

//Penambahan//
console.log('\nPenambahan 2')
for (var counter=1; counter<=100; counter+=2){
    console.log(counter)
}
console.log('\nPenambahan 5')
for (var counter=1; counter<=100; counter+=5){
  console.log(counter)
}
console.log('\nPenambahan 9')
for (var counter=1; counter<=100; counter+=9){
  console.log(counter)
}

//Kelipatan//
console.log('\nKelipatan 3, 6 dan 10.')
for (var counter=1; counter<=100; counter+=2)
if (counter%3==0)
    console.log(counter + " - KELIPATAN 3")

for (var counter=1; counter<=100; counter+=5)
if (counter%6==0)
console.log(counter + " - KELIPATAN 6")

for (var counter=1; counter<=100; counter+=9)
if (counter%10==0)
  console.log(counter + " - KELIPATAN 10")