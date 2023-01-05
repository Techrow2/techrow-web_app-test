import BassicPage from "./BasicPage";
const emailInput="input#email",
passwordInput="input#password",
errorMessage="div.alert-error-msg",
signup="p.signup-tag a",
incorrectPassword="#swal2-title",
forgotPasswordLink="div.text-right a",
sendLink="button.yellow-btn",
backToLogin="p.signup-tag.cursor-pointer",
newPassword="",
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
        FORGOT_PASSWORD_EMAIL_FIELD: () => cy.get('input[id=email]'),
        NEW_PASSWORD_FIELD: () => cy.get('input#newPassword'),
        REPEAT_PASSWORD_FIELD: () => cy.get('input#confirmPassword'),
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

//Selectors and method for confirmation of email on the QA TEAM website **********************/
    qaTeamWebsiteElements = {
        QA_TEAM_TEXT_FIELD_LOCATOR: () => cy.get('input[type="text"]'),
        QA_TEAM_GO_BUTTON_LOCATOR: () => cy.get('input[value="go »"]'),
        QA_TEAM_EMAIL_LOCATOR: () => cy.contains('div[class="subject"]', 'Reset your password for TechRow-Dev'),
        QA_TEAM_LINK_LOCATOR: () => cy.get('div[class="col-xs-12"]'),
    }

    openQaTeamMailPageToResetPassword(emailName) {
        cy.wait(4000);

        cy.visit('https://qa.team/');
       
        this.qaTeamWebsiteElements.QA_TEAM_TEXT_FIELD_LOCATOR().type(emailName);
        this.qaTeamWebsiteElements.QA_TEAM_GO_BUTTON_LOCATOR().click();
        cy.wait(4000);
        this.qaTeamWebsiteElements.QA_TEAM_EMAIL_LOCATOR().click();
        
        this.qaTeamWebsiteElements.QA_TEAM_LINK_LOCATOR().invoke('text').then((textFromField) => {
            const email = textFromField.substring(textFromField.indexOf('https'), textFromField.indexOf('=en') + 3);
            const pom = {
                url: email.toString()
            };
            cy.log(pom.email);
            cy.visit(pom.url);
        })
    }
//*******************************************************************************************/

    clickOnLoginButton() {
        this.loginFormElements.LOGIN_BUTTON_LOCATOR().click();
    }

    clickOnForgottPasswordLink() {
        this.loginFormElements.FORGOT_PASSWORD_LOCATOR().click();
    }

    typeEmail(email) {
        cy.wait(2000);
        this.loginFormElements.EMAIL_FIELD_LOCATOR().last().type(email);
    }

    enterNewPassword(newPassword){
        this.loginFormElements.NEW_PASSWORD_FIELD().type(newPassword);
        this.loginFormElements.REPEAT_PASSWORD_FIELD().type(newPassword);
        this.loginFormElements.LOGIN_BUTTON_LOCATOR().click();
    }

    typeReEnterNewPassword(pass){
        this.type(reenterNewPassword,pass)
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

    isSendByLinkPresent(){
        this.get(sendLink).should("be.visible")
    }
    clickByBacktoLogin(){
        this.click(backToLogin,"")
    }

    isIncorrectPasswordPopUpPresent(){
        this.visible(incorrectPassword)
    }

}export default LoginPage