var myMap = new Map();

myMap.set(1, "District");
myMap.set(2, "city");
myMap.set(3, "state");
myMap.set(4, "country");

console.log(myMap);


for (let [key, value] of myMap ) {
    console.log(`the key is ${key} and the value is ${value}`);
}

myMap.forEach( (value, key) => console.log(`${value}  and key is ${key}`));


// delete
myMap.delete(2)
console.log(myMap);


