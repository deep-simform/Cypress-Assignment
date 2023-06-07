class Login{
    username_locator = "//input[@name='username']";
    password_locator = "//input[@name='password']"
    login_button_locator = "//button[@type='submit']";
    my_info_button_locator = "//a[@href='/web/index.php/pim/viewMyDetails']";

    clickMyInfoButton()
    {
        //My info button visibility assertion
        cy.xpath(this.my_info_button_locator).should("be.visible")
        cy.xpath(this.my_info_button_locator).click()
    }
    enterUsername(username) {
        cy.xpath(this.username_locator).type(username).should("have.value",username)
    }
    enterPassword(password) {
        cy.xpath(this.password_locator).type(password).should("have.value",password)        
    }
    clickLoginBtn() {
        cy.xpath(this.login_button_locator).click()
    }
}

export default Login