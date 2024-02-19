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

    static login() {
        return "You are logged in!";
    }
};

class subAdmin extends User{
    constructor(name, email){
        super(name, email);
    }
    getAdmininfo() {
        return "I am Admin";
    }
};

const band = new User("Rock", "rock@yahoo.com");
// console.log(band.getInfo());

const child = new subAdmin("baby", "baby@gmail.com");
console.log(child.getAdmininfo())
console.log(child.login());
console.log(child.getInfo());