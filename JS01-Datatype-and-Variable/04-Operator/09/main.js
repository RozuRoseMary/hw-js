let a = 1 * "4" + +null + +" " - "5" * 2 + +(7 + 2 + "" + +!!undefined);

//return
console.log(a); //84

//solution:
/*
1*'4' = 4
4+0 = 4
4+0 = 4
4 - 10 = -6
+ +

(
  9 + "" = 90   
               !!undefined = 0
  + +0 = 0
) => 90

-6 + 90 = 84 
*/
