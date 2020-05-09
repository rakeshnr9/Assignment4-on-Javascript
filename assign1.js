function function1(){

let x = 0;
const array = Array();

function add_element_to_array()
{
 array[x] = document.getElementById("text1").value;
 alert(`Element: ${array[x]} Added at index ${x}`);
 x++;
 document.getElementById("text1").value = "";
}

function display_array()
{
   let e = "<hr/>";

   for (let y=0; y<array.length; y++)
   {
     e += `Element ${y} = ${array[y]}<br/>`;
   }
   document.getElementById("Result").innerHTML = e;
}


function printPrime(value) {
  var primes = [];
  for(var i = 2; i < value; i++) {
      primes[i] = true;
  }
  var limit = Math.sqrt(value);
  for(var i = 2; i < limit; i++) {
      if(primes[i] === true) {
          for(var j = i * i; j < value; j += i) {
              primes[j] = false;
          }
      }
  }
  for(var i = 2; i < value; i++) {
      if(primes[i] === true) {
          console.log(i + " " + primes[i]);
      }
  }
}
}