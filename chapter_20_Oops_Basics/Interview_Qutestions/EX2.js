class Environment {


    constructor(name = "Staging", port = 2000) {
        this.name = name;
        this.port = port;
    }

    getUrl() {

        return "https//" + this.name + ":" + this.port;
    }




}

let url1 = new Environment();
let url2 = new Environment("Production", 8080);

console.log(url1.getUrl());

console.log(url2.getUrl()); 