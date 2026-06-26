class Credentials {

    #apiKey;// Private variable is not allow to use outside
    user;

    constructor(key, user) {

        this.#apiKey = key;
        this.user = user;
    }

    sachingetHeader() {
        return "Bearer " + this.#apiKey;
    }

}

const cred = new Credentials("SecretKey", "admin");

console.log(cred.user);
//console.log(cred.apiKey); // Undefined
//console.log(cred.#apiKey);//error

const token = cred.sachingetHeader();
console.log(token);