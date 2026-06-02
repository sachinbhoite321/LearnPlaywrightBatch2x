//If ourStatuscode >=200 && ourStatusCode <=300;


//this is perfectly normal function
function validateStatusCode(status) {

    if (status >= 200 && status <= 300) {
        console.log("status is fine for request");
    }
}


//function as expression
const validateStatusCode_Exp = function (status) {

    if (status >= 200 && status <= 300) {
        console.log("status is fine for request");
    }
}


validateStatusCode_Exp(201);

//Arrow function
const validateStatusCode_Arrow = statusCode => {

    if (statusCode >= 200 && statusCode <= 300) {

        return statusCode + " is fine";

    }

}

const resultActual = validateStatusCode_Arrow(202);
console.log(resultActual);