class Bank {

    #balance;

    constructor(name, balance) {
        this.name = name;
        this.#balance = balance;

    }

    getDetails() {
        if (typeof name !== String) {

            return this.#balance
        }
    }

    setBalance(setAmt, isCashier) {
        if (isCashier) {

            this.#balance = setAmt;
        } else {
            console.log("Not allowed");
        }


    }

}

let sachin = new Bank("Sachin", 2000);

console.log(sachin.getDetails("Sachin"));

sachin.setBalance(20000, false);
console.log(sachin.getDetails("Sachin"));
sachin.setBalance(20000, true);
console.log(sachin.getDetails("Sachin"));