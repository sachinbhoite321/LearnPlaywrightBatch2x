interface testCase {
    id: number;
    name: string;
    status: string;
    duration: number;

}

let test1: testCase = {

    id: 1,
    name: "sachin",
    status: "pass",
    duration: 1500
}

console.log("TC" + test1.id + " : " + test1.name + " : " + test1.status + " : " + test1.duration);