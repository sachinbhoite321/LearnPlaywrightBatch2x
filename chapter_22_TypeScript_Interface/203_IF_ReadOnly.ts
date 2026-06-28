interface APIResponse {

    readonly statusCode: number;
    body: string;
    header?: string;
    responseTime?: number
}
//readOnly -- cant modify the readOnly

//? optional
let response: APIResponse = {
    statusCode: 200,
    body: `{"user","admin"}`,


};

console.log(response.statusCode);
console.log(response.body);