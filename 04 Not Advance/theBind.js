const user = {
    firstName : "john",
    lastName : "Mills",
    role : "Admin",
    courseCount : 3,
    getInfo : function () {
        console.log(`
        First Name is ${this.firstName}
        Last Name is ${this.lastName}
        His role is ${this.role}
        and he is studying ${this.courseCount} number of courses`);
    },

};

const dj = {
    firstName : "Rock",
    lastName : "dj",
    role : "sub-admin",
    courseCount : 4
};

user.getInfo()

// bind give you the reference for the data in another object
var djInfo = user.getInfo.bind(dj);
djInfo()