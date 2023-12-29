var user = {
    firstname : "Abhimanyu",
    lastname : "Kumar",
    role : "Admin",
    loginCount : 21,
    googleSignIn : true,
    courseList : [],
    buyCourse : function (courseName) {
        this.courseList.push(courseName);
    },
    getCourseCount : function () {
        return `${this.firstname} is enrolled in total of ${this.courseList.length} courses`;
    },

}
// var courseList = true;
console.log(user.getCourseCount());
user.buyCourse("Full Stack Data Science")
console.log(user.getCourseCount());
user.buyCourse("Javascript Beginner")
console.log(user.getCourseCount());
