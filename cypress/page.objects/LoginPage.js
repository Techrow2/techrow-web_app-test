import BassicPage from "./BasicPage";
const emailInput="input#email",
passwordInput="input#password",
errorMessage="div.alert-error-msg",
signup="p.signup-tag a",
incorrectPassword="#swal2-title",
forgotPasswordLink="div.text-right a",
emailInForgotPassword="input[id=email]",
sendLink="button.yellow-btn",
backToLogin="p.signup-tag.cursor-pointer",
newPassword="input#newPassword",
reenterNewPassword="input#confirmPassword"

class LoginPage extends BassicPage{

    loginFormElements = {
        EMAIL_FIELD_LOCATOR: () => cy.get('input#email'),
        PASSWORD_FIELD_LOCATOR: () => cy.get('input#password'),
        LOGIN_BUTTON_LOCATOR: () => cy.get('button.yellow-btn'),
        FORGOT_PASSWORD_LOCATOR: () => cy.get('div.text-right a'),
        SIGN_UP_LINK_LOCATOR: () => cy.get('p.signup-tag a'),
        BACK_TO_LOGIN_LINK_LOCATOR: () => cy.get('p.signup-tag.cursor-pointer'),
        CHANGE_PASSWORD_LOCATOR: () => cy.get('input#confirmPassword'),
        NEW_PASSWORD_FIELD_LOCATOR: () => cy.get('input#newPassword'),
    }

    fillLoginForm(email, password) {
        this.loginFormElements.EMAIL_FIELD_LOCATOR().type(email);
        this.loginFormElements.PASSWORD_FIELD_LOCATOR().type(password);
        this.loginFormElements.LOGIN_BUTTON_LOCATOR().click();
    }

    verifyLoginFormElements() {
        this.loginFormElements.EMAIL_FIELD_LOCATOR().should('be.visible');
        this.loginFormElements.PASSWORD_FIELD_LOCATOR().should('be.visible');
        this.loginFormElements.LOGIN_BUTTON_LOCATOR().should('contain.text', 'Login');
        this.loginFormElements.FORGOT_PASSWORD_LOCATOR().should('contain.text', 'Forgot Password?');
        this.loginFormElements.SIGN_UP_LINK_LOCATOR().should('contain.text', 'Sign Up');
    }

    clickOnLoginButton() {
        this.loginFormElements.LOGIN_BUTTON_LOCATOR().click();
    }

    isErrorVisible(visibility){
        this.get(errorMessage).should(visibility)
    }

    clickByLogginButton() {
        this.get()
    }

    clickSignUp(){
        this.get(signup).click()
    }
    clearEmail(){
        this.get(emailInput).clear()
    }
    clearPassword(){
        this.get(passwordInput).clear()
    }
    isForgotenLinkPresent(){
        this.get(forgotPasswordLink).should("be.visible")
    }
    clickByForgottPassword(){
        this.click(forgotPasswordLink,"Click")
    }
    isSendByLinkPresent(){
        this.get(sendLink).should("be.visible")
    }
    clickBySendLink(){
        this.click(sendLink,"")
    }
    typeEmailInForgottPage(email){
        this.type(emailInForgotPassword,email)
    }
    clickByBacktoLogin(){
        this.click(backToLogin,"")
    }
    typeNewPassword(pass){
        this.type(newPassword,pass)
    }
    typeReEnterNewPassword(pass){
        this.type(reenterNewPassword,pass)
    }
    isIncorrectPasswordPopUpPresent(){
        this.visible(incorrectPassword)
    }

}export default LoginPage