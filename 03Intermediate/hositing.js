//  this is show the practical implementation of context in javascript

tipper("80");

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill + 5);
}

// tipper("80") or tipper(80)


var bigTipper = function (a) {
    var bill = parseInt(a);
    console.log(bill + 15);
}

bigTipper("213")


console.log(name);
var name = "Abhimanyu";

function sayHello() {
    var name = "Mr. A";
    console.log(name);
}

sayHello()

console.log(name)