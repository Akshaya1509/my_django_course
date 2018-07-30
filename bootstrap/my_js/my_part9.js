var fname = prompt("your first name?");
var lname = prompt("your last name?");
var age   = prompt("your age?");
var height = prompt("what is your height?")
var pet_name = prompt("your pet name?");

if ((fname[0] == lname[0]) && (age>=20 && age <=30) && (height>=170) && (pet_name[pet_name.length-1] == 'y')){
  console.log("welcome buddy")
}
else{
  console.log("sorry, wrongs")
}
