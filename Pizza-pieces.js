/*
In her trip to Italy, Elizabeth Gilbert made it her duty to eat perfect pizza. 
One day she ordered one for dinner, and then some Italian friends appeared at her room. 
The problem is that there were many people who ask for a piece of pizza at that moment, 
and she had a knife that only cuts straight.

Given the number of pizza cuts, 
find the maximum amount of pieces of pizza that you can get (not necessarily of equal size). 
If the number of cuts is negative, return -1 instead.
*/


// Solution

function maxPizza(cut) {
  return cut < 0 ? -1 : 1 + cut * (cut + 1) / 2;
}

// or

// function maxPizza(cuts) {
//   // Set base case to 0
//   // iterate from 0 to cuts
//   // plug cuts into formula
//   // keep track of last number of slices
//   // return the running total
//   let slices = 1;
  
//   if (cuts < 0){
//     return -1
//   }
  
//   for (let i = 1; i <= cuts; i++){
//     slices += i;
//   }
  
//   return slices;
// }

const maxPizza = cuts => cuts < 0 ? -1 : Array(cuts).fill("maballs").reduce((acc, _cur, insex) => acc += insex + 1, 1);

// A0 = 1
// An = A(n-1) + n
// An = slices
// N  = cuts