import BassicPage from "./BasicPage";

const usingTechrowForButton = "button.yellow-btn";
const startyourfreeTrialButton = "button.btn";
const continueButton = "button.btn";
const startTrialButton = "button.btn-step";

class SignUpPage extends BassicPage {

    generalElements = {
        CREATE_ACCOUNT_BUTTON_LOCATOR: () => cy.contains('button', 'CREATE ACCOUNT'),
        // OPEN_MAIL_APP_BUTTON_LOCATOR: () => cy.contains('button', 'OPEN EMAIL APP'),
    }

    //Selectors and methods for School account creation ***************************************/
    schoolAccountElements = {
        SCHOOL_BUTTON_LOCATOR: () => cy.contains('button', 'SCHOOL'),
        FIRST_NAME_LOCATOR: () => cy.get('input#formBasicFirstName'),
        LAST_NAME_LOCATOR: () => cy.get('input#formBasicLastName'),
        SCHOOL_CODE_LOCATOR: () => cy.get('input[name=schoolCode]'),
        EMAIL_LOCATOR: () => cy.get('input#formBasicEmail'),
        PASSWORD_LOCATOR: () => cy.get('label:contains("Password")~ div input#formBasicPassword'),
        REPEAT_PASSWORD_LOCATOR: () => cy.get('input[name="confirmPassword"]'),
        FIRST_NAME_LOCATOR: () => cy.get('input#formBasicFirstName'),
    }

    fillSignUpFormForSchoolUsage(firstName, lastName, schoolCode, email, password) {
        this.schoolAccountElements.FIRST_NAME_LOCATOR().type(firstName);
        this.schoolAccountElements.LAST_NAME_LOCATOR().type(lastName);
        this.schoolAccountElements.SCHOOL_CODE_LOCATOR().type(schoolCode);
        this.schoolAccountElements.EMAIL_LOCATOR().type(email);
        this.schoolAccountElements.PASSWORD_LOCATOR().type(password);
        this.schoolAccountElements.REPEAT_PASSWORD_LOCATOR().type(password);
        this.generalElements.CREATE_ACCOUNT_BUTTON_LOCATOR().click();
    }

    selectSchoolAccount() {
        this.schoolAccountElements.SCHOOL_BUTTON_LOCATOR().click();
    }
    //*******************************************************************************************/

    //Selectors and methods for Personal account creation ***************************************/
    personalAccountElements = {
        PERSONAL_BUTTON_LOCATOR: () => cy.contains('button', 'PERSONAL'),
        FIRST_NAME_LOCATOR: () => cy.get('input#formBasicFirstName'),
        LAST_NAME_LOCATOR: () => cy.get('input#formBasicLastName'),
        EMAIL_LOCATOR: () => cy.get('input#formBasicEmail'),
        PASSWORD_LOCATOR: () => cy.get('label:contains("Password")~ div input#formBasicPassword'),
        REPEAT_PASSWORD_LOCATOR: () => cy.get('input[name="confirmPassword"]'),
    }

    fillSignUpFormForPersonalUsage(firstName, lastName, email, password) {
        this.personalAccountElements.FIRST_NAME_LOCATOR().type(firstName);
        this.personalAccountElements.LAST_NAME_LOCATOR().type(lastName);
        this.personalAccountElements.EMAIL_LOCATOR().type(email);
        this.personalAccountElements.PASSWORD_LOCATOR().type(password);
        this.personalAccountElements.REPEAT_PASSWORD_LOCATOR().type(password);
        this.generalElements.CREATE_ACCOUNT_BUTTON_LOCATOR().click();
    }

    selectPersonalAccount() {
        this.personalAccountElements.PERSONAL_BUTTON_LOCATOR().click();
    }
    //********************************************************************************************/

    //Selectors and method for confirmation of email on the QA TEAM website **********************/
    qaTeamWebsiteElements = {
        QA_TEAM_TEXT_FIELD_LOCATOR: () => cy.get('input[type="text"]'),
        QA_TEAM_GO_BUTTON_LOCATOR: () => cy.get('input[value="go »"]'),
        QA_TEAM_EMAIL_LOCATOR: () => cy.contains('div[class="subject"]', 'Verify Your Email with TechRow'),
        QA_TEAM_LINK_LOCATOR: () => cy.get('div[class="col-xs-12"]'),
    }

    openQaTeamMailPage(emailName) {
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

        cy.wait(4000);
        cy.visit('https://techrow-streaming.pages.dev/auth/signup?step=choosePlan&uid');
    }
    //*******************************************************************************************/

    // Selectors and methods to choose a plan for purchase **************************************/
    chooseYourPlaneElements = {
        MONTHLY_PAYMENT_LOCATOR: () => cy.contains('span', 'Monthly'),
        ANNUALL_PAYMENT_LOCATOR: () => cy.contains('span', 'Annually'),
        CONTINUE_BUTTON_LOCATOR: () => cy.contains('button', 'CONTINUE'),
    }

    selectAnualPayment() {
        this.chooseYourPlaneElements.ANNUALL_PAYMENT_LOCATOR().click();
        this.chooseYourPlaneElements.CONTINUE_BUTTON_LOCATOR().click();
    }

    selectMonthlyPayment() {
        this.chooseYourPlaneElements.MONTHLY_PAYMENT_LOCATOR().click();
        this.chooseYourPlaneElements.CONTINUE_BUTTON_LOCATOR().click();
    }
    //*******************************************************************************************/

    // Selectors and methods for Payment field **************************************************/
    paymentFormElements = {
        CARD_NUMBER_LOCATOR: () => cy.get('input[name="cardNumber"]'),
        EXPIRATION_LOCATOR: () => cy.get('input[name="expiration"]'),
        CVV_LOCATOR: () => cy.get('input[name="cvv"]'),
        ZIP_CODE_LOCATOR: () => cy.get('input[name="zipCode"]'),

    }

    fillPaymentForm(cardNumber, expiration, cvv, zipCode) {
        this.paymentFormElements.CARD_NUMBER_LOCATOR().type(cardNumber);
        this.paymentFormElements.EXPIRATION_LOCATOR().type(expiration);
        this.paymentFormElements.CVV_LOCATOR().type(cvv);
        this.paymentFormElements.ZIP_CODE_LOCATOR().type(zipCode);
        this.chooseYourPlaneElements.CONTINUE_BUTTON_LOCATOR().click();
    }
    //*******************************************************************************************/

    // Selectors and methods for Confirmation page **********************************************/
    confirmInformationElements = {
        CONFIRM_PAGE_INFO_TITLE_LOCATOR: () => cy.contains('h2', 'Confirm Your Information'),
        USER_EMAIL_LOCATOR: (email) => cy.contains('p', email),
        START_TRIAL_BUTTON_LOCATOR: () => cy.get('button.btn.btn-step'),
    }

    checkUserAndStartTrial(email) {
        this.confirmInformationElements.CONFIRM_PAGE_INFO_TITLE_LOCATOR()
          .should('contain.text', 'Confirm Your Information');
        this.confirmInformationElements.USER_EMAIL_LOCATOR(email).should('contain.text', email);
        this.confirmInformationElements.START_TRIAL_BUTTON_LOCATOR().click();
    }
    //*******************************************************************************************/


    
clickByUsingTechrowForButton(conditions) {
    cy.wait(1700)
    this.get(usingTechrowForButton).contains(conditions).click()
}
typePassword(passwordms){
    this.type(password,passwordms)
}
isFirstNameVisible(){
    this.get(firstName).should("be.visible")
}
isLastNameVisible(){
    this.get(lastName).should("be.visible")
}
isEmailVisible(){
    this.get(email).should("be.visible")
}
isPasswordVisible(){
    this.get(password).should("be.visible")
}
isReEnterPasswordVisible(){
    this.get(reEnterPassword).should("be.visible")
}
isChildFirstNameVisible(){
    this.get(childsFirstName).should("be.visible")
}
isChildLastNameVisible(){
    this.get(childsLastName).should("be.visible")
}
isChildsDateOfBirthVisible(){
    this.get(childsDateOfBirth).should("be.visible")
}
typeLastName(message){
    this.type(lastName,message)
}
typeFirstName(message){
    this.type(firstName,message)
}
typeEmail(message){
    this.type(email,message)
}
typeReenteredPassword(password){
    this.type(reEnterPassword,password)
}
typeChildsFirstName(message){
    this.type(childsFirstName,message)
}
typeChildLastName(message){
    this.type(childsLastName,message)
}
typeChildDateOfBirth(date){
    this.type(childsDateOfBirth,date)
}
saveEmail(){
    cy.get(email).invoke('val').then(title=>{
        if(title.substring(4,5)=="@"){
            cy.task('save',title.substring(0,4))}
        else cy.task('save',title.substring(0,5))
    })
}
choseAnnuallyPlan(){
    this.clickwithargs(annuallyPayment,"Annually")
}
typeCardDetail(card){
    this.type(cardNumberInput,card)
}
typeCardExpiration(expiration){
    this.type(expirationInput,expiration)
}
typeCVV(cvv){
    this.type(cvvInput,cvv)
}
typeZipCode(zip){
    this.type(zipCodeInput,zip)
}
clickStartTrial(){
    cy.get(startyourfreeTrialButton).click()
}
clickByContinueButton(){
    this.click(continueButton)
}
clickTrial(){
    this.wait(1)
    this.click(startTrialButton)
}
typeSchoolCode(message){
    this.type(schoolCode,message)
}
verifyIsOnTheCorrectPage(url){
    this.wait(2)
    this.url().should("include",url)
}
}

export default SignUpPage;