//displaying Welcome message

function showGreeting(){
    alert("Welcome to this Page!")
}
//variables,Data Types, and Operators
//string
var myName = "Kareemat Babatola";
console.log(myName);

//combining strings and number
var sentence = 21 + "Joe";
var sentence1 = "Joe" + 21;
console.log(sentence + "" + sentence1);

//number(addition)
var x =8;
var y = 9;
var sum = x+y;
console.log(sum);

//number(subtraction)
var w = 30;
var u = 17;
var minus = w-u;
console.log(minus);

//number(multiplication)
var a = 6;
var b = 8;
var multiply = a*b; 


console.log(multiply);

//Boolean 
var isCodingFun = true;
var isCwwProgrammeFun = true;

console.log(isCodingFun);

//to check for odd and even number
function func(){
   num = parseInt(document.getElementById("num").value);
   if(num)
   {
       temp = document.getElementById("resNum");
       temp.style.display = "block";
       if(num%2==0){
           document.getElementById("res").innerHTML = "Even";
       }
       else{
           document.getElementById("res").innerHTML = "odd";
       }
   } 
}

//for loop statement
for(var i=0; i<=10; i++){
        document.write(i + "<br>")
 }

//functions and scope
function addNumbers(num1, num2){
    var sum = num1 + num2;
    document.getElementById("show").innerHTML = sum;
}
addNumbers(27, 83); 
addNumbers(33, 10);

//Arrays 
var fruits =["Orange", "Mango","Water Melon","Soursop","Cashew","Apple","Banana"];
document.getElementById("display").innerHTML= fruits;

//objects
var person ={
    name:" Kareemat Babatola",
    age:  28,
    hobby: " coding",
    showDetails: function(){
        alert(this.name  +  "is" + "" +  this.age + " years old" + " and her hobby is" + "" + this.hobby);
    }
}

//higher order function
var cities = ["Abuja","Lagos", "Lokoja","Enugu","Osogbo","Ondo"];
console.log(cities.length)
cities.push("Ado-Ekiti");
console.log(cities);
cities.shift();
console.log(cities);
cities.pop();
console.log(cities);

