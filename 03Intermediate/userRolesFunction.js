
var getUserRole  = function (name, role) {
    
    switch (role) {
        case "admin": 
            return `${name} is admins and have all access` ;    
        case "sub-admin": 
            return `${name} is sub-admin and have access to delete/create courses` ;
        case "testprep": 
            return `${name} is a test creattion user`;

        case "user": 
            return `${name} is a user to consume content`;
        default:
            return `${name} is a trial user`;
    }
    
}

// console.log(getUserRole("Abhimanyu", "admin"));

var getRole = getUserRole("Abhimanyu", "testprep");
console.log(getRole);

