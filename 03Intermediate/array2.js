//  arrow function 

var isEven = (element) => {
    // if (element % 2 === 0) {
    //     return true;
    // }
    // return false;
    return element % 2 === 0;
}

// console.log(isEven(4));


// ARRAY FUNCTIONALITY

// var result = [2,5,6,8].every(isEven);
// console.log(result);

// another way to do this 

// var result = [2,4,7,8].every((e) => {
//     return e%2===0
// })

var result = [2,4,6,8].every((e) => (e%2===0));
console.log(result);


