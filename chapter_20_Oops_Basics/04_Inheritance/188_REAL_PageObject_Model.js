class BasePage {
    verify() {
        console.log("Verify base page");
    }
}

class LoginPage extends BasePage {
    verify() {
        console.log("Verify username field exist");
        console.log("Verify password field exist");
        console.log("Verify Login button visible");
    }
}

class Dashboard extends BasePage {
    verify() {

        console.log("Welcome message should display");
        console.log("Welcome and sidebar visible");
    }
}

class CartPage extends BasePage {
    verify() {
        console.log("Cart item should display");
        console.log("Verify total price is correct");
    }
}

let page = [new LoginPage(), new Dashboard(), new CartPage()]

page.forEach(function (page) {
    page.verify();
    console.log("-------------");
})