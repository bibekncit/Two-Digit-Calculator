let num1 = 12
let num2 = 2
let result;
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2
let sumEL = document.getElementById("sum-el")
console.log(sumEL)

//This function reset can be excluded from code.
function reset(){
  result = 0;
} 

function add()
{

   result = num1 + num2
   sumEL.textContent = result;
   console.log("added")
  reset();
   console.log(sumEL);
   
}
function subtract()
{
    console.log('subtracted');
   result = num1-num2
   sumEL.innerHTML = result;
   console.log(sumEL)
   //reset();
}
function divide()
{
  result = num1 / num2
  sumEL.innerHTML = result
  console.log("divided ans is", result)
 // reset();
}

function multiply()
{
  result = num1 * num2
  sumEL.textContent = result
  //reset();
}