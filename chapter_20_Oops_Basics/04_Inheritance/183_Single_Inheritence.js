class BasePage {

    constructor(pageName) {
        this.pageName = pageName;
    }

    open() {
        console.log("Open the page");
    }

    close() {
        console.log("Close the page");
    }
}

class LoginPage extends BasePage {


}

const page = new LoginPage();
page.close();
page.open();