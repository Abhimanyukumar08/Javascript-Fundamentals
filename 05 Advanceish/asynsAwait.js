// Promises
const uno = () => {
    return "I am One";
};

const duos = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("I am Two")
        }, 2000)
    });
};

const tres = () => {
    return "I am three";
};

const callme = async() => {
    let valOne = uno();
    console.log(valOne);

    let valTwo = await duos();
    console.log(valTwo);

    let valThree = tres();
    console.log(valThree);
}

callme()