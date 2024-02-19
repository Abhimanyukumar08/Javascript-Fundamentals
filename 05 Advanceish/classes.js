class User {
    constructor (name, email) {
        this.name = name;
        this.email = email;
    }
    // creating private variable
    #courseList = [];

    getInfo() {
        return {name:this.name, email:this.email};
    }
    // setter
    enrollCourse(course){
        this.#courseList.push(course);
    }
    // getter
    getCourse(){
        return this.#courseList;
    }
}

// exporting the class to use to in another file

module.exports = User;

const band = new User("Rock", "rock@yahoo.com");
console.log(band.getInfo());
band.enrollCourse("sa-re-ga-ma");
band.enrollCourse("raag");
console.log(band.getCourse());
console.log(band.courseList);
