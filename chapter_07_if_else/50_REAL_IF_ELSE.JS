
let isLoggedIn = false;
let userRole = "editor";

if (isLoggedIn) {

    if (userRole === "admin") {
        console.log("Admin can do all the things")
    } else if (userRole === "editor") {
        console.log("Welcome Editor --Edit access granted.");
    } else if (userRole === "Viewer") {
        console.log("Welcome viewer -- Read only access");
    } else {
        console.log("No idea you may be guest you are:")
    }
} else {
    console.log("You are not logged in")
}