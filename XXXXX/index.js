// var x=1;
// // var input = Number(prompt("Pick a number:"))
// function fact(n){
//     if(n == 0 || n == 1){
//         console.log(1);
//     }
//     else{
//         for(let i = 1; i<=n; i++){
//             x *= i;
//         }console.log(x)

//     }
// }
// fact(56)






const koko = require("./junk/javascript.js")
 console.log(koko.iso)
 console.log(koko.flo)
koko.junk();
koko.knuj();
// koko.iso();
// koko.flo();





// Factorial Iterative
// var x = 1;
// function fact(n){
//     if(n == 1 || n ==0){
//         return 1;
//     }
//     else if(n < 0){
//         return null;
//     }
//     else{
//        for(i=2; i<=n; i++){
//             x = x * i;
//        }console.log(x)
//     }
// }
// fact(6)


// Fibonacci Iterative
// var fib=[];
// function fibo(n){
//     if(n == 1){
//         fib.push(0);
//     }
//     if(n == 2){
//          fib.push(0);
//          fib.push(1);
//     }
//     if(n<=0){
//         return null;

//     }
//     if(n>2){
//         fib[0] = 0;
//         fib[1] = 1;
//         for(i=1 ;i<=n-2; i++){
//              fib.push(fib[i]+fib[i-1]);
//         }
//     }console.log(fib)
// }
// fibo(12)


// Factorial recursion
// var x = 1;
// var i = 2;
//  function fact(n){
//      if(n<0){
//          console.log(0);
//      }
//      else if(n==0 || n==1){
//          console.log(1);
//      }
//      else if(i<=n){
//          x = x * i;
//          i++;
//          fact(n)
//      }
//      else{
//         console.log(x);
//      }
//  }
// fact(7)






// for(i=1 ;i<=n-2; i++){
//                  fib.push(fib[i]+fib[i-1]);
//             }
//         }console.log(fib)
// do{
//     fib.push(fib[i]+fib[i-1]);
//     ++i;
// }while(i<=n-2)    

// // Fibonacci Recursion
// console.time('Time this:')
// var fib=[];
// var i = 1;
// function fibo(a){
//     if(a == 1){
//         fib.push(0);
//         console.log(fib)
//     }
//     else if(a == 2){
//          fib.push(0);
//          fib.push(1);
//          console.log(fib)
//     }
//     else if(a<=0){
//         return null;
//     }
//     else if(i<=a-2){
//         fib[0] = 0;
//         fib[1] = 1;
//         fib.push(fib[i]+fib[i-1]);
//         ++i;
//         fibo(a)
//     } 
//     else{
//         console.log(fib)
//     }
// }
// fibo(10)
// console.timeEnd('Time this')





