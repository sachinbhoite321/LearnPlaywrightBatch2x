class BankAccout {

    #balance = 10;

    deposite(amt) {
        if (amt > 0) {
            this.#balance += amt;
        }
    }

    getBalance() {
        return this.#balance;
    }
}

const details = new BankAccout();
details.deposite(100);
console.log(details.getBalance());

//console.log(details.balance);// Undefined

//console.log(BankAccout.#balance);//Private field '#balance' must be declared in an enclosing class
