function function9(){
var i, j, result, str;
str="Javascript"
//outer loop
for(i=1;i<=str.length;i++)
 {
result=str.substr(0,i)
   document.write(result+'<br/>');
 }
}