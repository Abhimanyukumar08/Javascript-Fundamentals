// import User from "./classes.js"

const User = require("./classes.js");

const obj = new User("Abhimanyu", "abhi@gmail.com");

console.log(obj.getInfo());
obj.enrollCourse("java");
obj.enrollCourse("React Bootcamp")

let courses = obj.getCourse();

courses.forEach((c) => console.log(c));
