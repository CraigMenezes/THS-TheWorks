//Program 1
// function test(n){
//   if(n%2 == 0){
//       console.log("even");
//   }
//   else{ console.log("odd"); }
// }
// test(979)

//Program 2
// var even=[];
// var odd=[];
// function test(n){
//     n=n*2;
//     for(i=0; i<n; i++){
//         if(i%2 == 0){
//             even.push(i);

//         }
//         else{
//             odd.push(i);

//         }
//     }
//     console.log(even);
//     console.log(odd);
// }
// test(5)





// let a = [1, 2, 3, 4];
// let b = [5, 6, 7, 8];
// function swap() {
//     for (let i = 0; i<3; i++) {
//         a.push(b[i]);
//         b.push(a[i]);
//     }
//     for (let j = 0; j <3; j++) {
//         a.shift();
//         b.shift();
//     }

//     console.log(a);
//     console.log(b);
// }
// swap();

// var arr=[1,2,3,4,5,6,7,8,9,10,11,12,13]
// var final=[];
// var temp;
// for(x=0;x<arr.length;x++){
//     for(y=2;y<arr[x];y++){
//        if(arr[x] % y == 0;){
//         break;
//        }
//        else{
//            temp=
//        }

//     }
// }
































function myFunc(x, y) {
    // add all elements from x to y
    // when an element is unshifted from y it should be pushed to x 

    len = x.length
    for (i =0; i< len; i++){
        y.push(x.shift())
    }

    for (i =0; i< len; i++){
        x.push(y.shift())
    }
return [x,y]
}

let a = [1, 2, 3, 4]
let b = [5, 6, 7, 8]
console.log(myFunc(a, b))


// 




