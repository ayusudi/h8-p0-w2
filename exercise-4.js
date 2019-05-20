var date= 24;
var month=6;
var year=1998;

if(date > 31) {
date="Inavlid date."}


if (month) {
  switch(month){
    case 1: month="January"; break;
    case 2: month = "February"; break; 
    case 3: month ="March"; break; 
    case 4: month = "April";  break; 
    case 5: month = "May"; break; 
    case 6: month = "June"; break; 
    case 7: month = "July"; break; 
    case 8: month = "August";  break; 
    case 9: month = "September";  break; 
    case 10: month = "October";  break; 
    case 11: month = "November"; break; 
    case 12: month = "December";  break; 
    default: month = "Invalid month."; break;}
  } 

if (year<1900) {
  year="Please put year between 1900 to 2200.";}

if (year >2200) {
  year="Please put year between 1900 to 2200.";}

console.log (date+" "+month+" "+year)

