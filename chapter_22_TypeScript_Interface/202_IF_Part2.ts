interface APIResponse {
    body: string;
    header?: object;
    respnseTime?: number;
}

let respnse: APIResponse = {
    body: "Hi",
    header: {},
    respnseTime: 500
}