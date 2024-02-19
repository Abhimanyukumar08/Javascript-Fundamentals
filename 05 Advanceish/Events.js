const uno = () => {
    console.log("I am One");
};

const duos = () => {
    setTimeout(() => {
        console.log("Wooohoooo");
    }, 2000);
    console.log("I am two");
};

const tres = () => {
    console.log("I am three");
};

uno();
duos();
tres();