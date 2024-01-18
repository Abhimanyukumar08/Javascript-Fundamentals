var User = function (firstName, courseCount){
    this.firstName = firstName;
    this.courseCount = courseCount;
    this.getCourseCount = function (){
        console.log(`the course count is : ${this.courseCount}`);
    }
}

User.prototype.getFirstName = function () {
    console.log(`Your name is : ${this.firstName}`);
}

var ak = new User("abhimanyu", 2);
ak.getCourseCount();
if (ak.hasOwnProperty("firstName")){
    ak.getFirstName();
};
// console.log(ak);

var ad = new User("aditi", 4);
ad.getCourseCount();
ad.getFirstName();
// console.log(ad);