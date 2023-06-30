//const  regex=/catholic/g;
const regex=/catholic/g;
const str1="Nory was a catholic because her mother was a catholic,nory's mother was a catholic"
document.write(str1);
document.write("<hr/><br/>",str1.replace(regex,"hindu"));
//methods:

var regex1=/nory/i;
var output=regex1.exec(str1);
document.write("<br/>",output);
console.log(output);

//test ()method
var matchcase=regex1.test(str1);
document.write("<br/>",matchcase);



let txt="HELLO HOW are you 123 !!!!!!";
let  result=txt.match(/[A-Z, a-z,0-9]/g);
document.write("<br/>",result);
 
