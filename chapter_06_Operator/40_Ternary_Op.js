let age = 21;

let rj_will_goa = age > 18 ? "Rj_will_goa" : "NO GOA";

console.log(rj_will_goa);

// nested Turnary i, e multiple condition

let age1 = 36;

let will_go = age1 < 37 ? (age1 > 18 ? "Able to drink" : "Not allow") : "No Go";

console.log(will_go)

//------------------

let statusCode = 404;
let category =
    statusCode < 300 ? "Success" :
        statusCode < 400 ? "Redirect" :
            statusCode < 500 ? "Client Error" : "Server Error";

console.log(`Status ${statusCode}: ${category}`);