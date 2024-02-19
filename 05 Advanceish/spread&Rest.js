function twoSum(a,b) {
    return a+b; 
};

// console.log(twoSum(23,32));

// but if we pass variable as the parameter

var data = [4,5];
// console.log(twoSum(data)); //this will give undefined bcz the function asking for individual value

console.log(twoSum(...data));  //this is Spread Op which separate the list of value and pass it individually

// when we don't know the count of the paramters going to be pass

function sumOne(a,b,...args) {
    console.log(args);
    let multi = a*b ;
    let sum = 0
    for(const arg of args) {
        sum +=arg;
    };
    return [sum,multi];
}

console.log(sumOne(3,4,6,7,9,1));