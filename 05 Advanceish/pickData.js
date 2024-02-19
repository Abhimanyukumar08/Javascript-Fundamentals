var user = ["prince", 4, "admin"]

// var role = user[2];
// var courseCount = user[1];

// console.log(role, courseCount);

// the above one is simple, to make it destructure 

// var [name, courseCount, role] = user;

// console.log(name, role);


// USing object

const myObj = {
    name: "prince",
    courseCount: 5,
    role : "manager",
};

console.log(myObj.courseCount);

const { name, courseCount, role} = myObj;

console.log(role, courseCount);