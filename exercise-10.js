function bandingkanAngka (num1, num2){
    if (num2>num1){
     return 'true'
    }
    else if (num2<num1){
      return 'false'
    }
    else {
      return '-1'
    }
  }
  
  console.log (bandingkanAngka(5,8));
  console.log (bandingkanAngka(5,3));
  console.log (bandingkanAngka(4,4));
  console.log (bandingkanAngka(3,3));
  console.log (bandingkanAngka(17,2));
  