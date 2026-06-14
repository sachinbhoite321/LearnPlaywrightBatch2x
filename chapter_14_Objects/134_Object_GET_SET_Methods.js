const user = {

    firstName: "Sachin",
    lastName: "Bhoite",

    get fullName() {
        return this.firstName + this.lastName;
    },

    set fullName(value) {

        [this.firstName, this.lastName] = value.split(" ");
    }
}

console.log(user.fullName);
user.fullName = "Shital Bhoite";

console.log(user.fullName);