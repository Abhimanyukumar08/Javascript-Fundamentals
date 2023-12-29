var user = {
    firstname : "Abhimanyu",
    lastname : "Kumar",
    role : "Admin",
    loginCount : 21,
    googleSignIn : true,

}

console.log(user.firstname);  //preferable format
console.log(user["lastname"]);

console.log(user.loginCount); // preferable format
user.loginCount = 50;
console.log(user.loginCount);