
//Grand Father > Father > son
//BasePage > AuthPAge > Login Page

class BasePage {
    constructor(name) {
        this.name = name;
    }

    open() {
        console.log("[Open :", this.name);
    }
}

class AuthPage extends BasePage {

    login(user) {
        console.log("[Login}", user);
    }

}

class AdminPage extends AuthPage {
    constructor() {
        super("Admin Panel")
    }

    manageUser() {
        console.log("[Admin] Managing user");
    }
}

let admin = new AdminPage();
admin.open();
admin.login("Superadmin");
admin.manageUser();