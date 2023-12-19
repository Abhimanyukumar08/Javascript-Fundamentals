//  Useage of the Switch Case

var user = "ueww";

switch (user) {
    case "admin":
        console.log("You will get the full access");
        break;
    case "subadmin":
        console.log("You will get the access for delete/create courses");
        break;
    case "tester":
        console.log("You will get the access to create/delete test cases");
        break;
    case "user":
        console.log("You have the access to consume the content");
        break;

    default:
        console.log("Trial user");
        break;
}