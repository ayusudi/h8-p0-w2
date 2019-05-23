function konversiMenit(a) {
    var x = a/60;
    var jam = Math.trunc(x);
    var menit = a % 60;
    
    if (menit>=10){
      return jam + ':' + menit
      }
    else {
      return jam + ':' + 0 + menit
      }
    
    }
    
    console.log(konversiMenit(63));
    console.log(konversiMenit(124));
    console.log(konversiMenit(53));
    console.log(konversiMenit(88));
    console.log(konversiMenit(120));