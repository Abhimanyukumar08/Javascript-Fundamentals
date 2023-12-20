var name = "Abhimanyu";

console.log(name)

function sayHello() {
    var name = "Mr. A";
    console.log(name);

    function sayHello2() {
        var name = "Mr. P" ;
        console.log(name);
    }
    sayHello2()
}

sayHello()