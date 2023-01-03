import BasicActions from "../actions/BasicActions";

class PersonallInfoPage extends BasicActions {

// Selectors and methods to update personal info ******************************************************* */
    personalInfoFormElements = {
        PROFILE_BUTTON: () => cy.get('button#dropdown-basic'),
        FIRST_NAME: () => cy.get('input#firstname'),
        LAST_NAME: () => cy.get('input#lastname'),
        EMAIL: () => cy.get('input#email'),
        CHILD_FIRST_NAME: () => cy.get('#firstName-0'),
        CHILD_LAST_NAME: () => cy.get('#lastName-0'),
        CHILD_FIRST_NAME_1: () => cy.get('#firstName-1'),
        CHILD_LAST_NAME_1: () => cy.get('#lastName-1'),
        BIRTH_DATE: () => cy.get('#dob-0'),
        BIRTH_DATE_1: () => cy.get('#dob-1'),
        ADD_CHILD_BUTTON: () => cy.get('div.child-add-link a'),
        REMOVE_CHILD_BUTTON: () => cy.get('div.remove-field-btn span'),
        UPDATE_PERSONAL_INFO_BUTTON: () => cy.get('div.child-add-link+div button'),
        CONFIRM_REMOVE_BUTTON: () => cy.get('button.swal2-confirm')
    }
    
    updatePersonalInfoFields(firstName, lastName, chFirstName, chLastName, birthDate) {
        this.personalInfoFormElements.FIRST_NAME().clear().type(firstName + '{enter}');
        this.personalInfoFormElements.LAST_NAME().clear().type(lastName + '{enter}');
        this.personalInfoFormElements.CHILD_FIRST_NAME().clear().type(chFirstName + '{enter}');
        this.personalInfoFormElements.CHILD_LAST_NAME().clear().type(chLastName + '{enter}');
        this.personalInfoFormElements.BIRTH_DATE().clear().type(birthDate + '{enter}');
        this.personalInfoFormElements.ADD_CHILD_BUTTON().click();
        this.personalInfoFormElements.CHILD_FIRST_NAME_1().clear().type(chFirstName + '{enter}');
        this.personalInfoFormElements.CHILD_LAST_NAME_1().clear().type(chLastName + '{enter}');
        this.personalInfoFormElements.BIRTH_DATE_1().clear().type(birthDate + '{enter}');
    }

    clickUpdateButton() {
        this.personalInfoFormElements.UPDATE_PERSONAL_INFO_BUTTON().click();
        cy.wait(3000);
    }

    checkProfileUserName(userName) {
        this.personalInfoFormElements.PROFILE_BUTTON().should('contain.text', userName);
    }
    
    removeSecondChild() {
        this.personalInfoFormElements.REMOVE_CHILD_BUTTON().click();
        this.personalInfoFormElements.CONFIRM_REMOVE_BUTTON().click();
    }
    
    checkChildNotExist() {
        this.personalInfoFormElements.CHILD_FIRST_NAME_1().should('not.exist');
        this.personalInfoFormElements.CHILD_LAST_NAME_1().should('not.exist');
        this.personalInfoFormElements.BIRTH_DATE_1().should('not.exist');
    }
//******************************************************************************************* */

//Selectors and methods to update account details ******************************************* */

    accountDetailElements = {
        CURRENT_PASSWORD: () => cy.get('input#password'),
        NEW_PASSWORD: () => cy.get('input[name="newPassword"]'),
        CONFIM_PASSWORD: () => cy.get('input[name="confirmPassword"]'),
        UPDATE_ACCOUNT_DETAILS_BUTTON: () => cy.get('div.row+div button')
    }

    updateAccountDetailsFields(currentPass, newPass) {
        this.accountDetailElements.CURRENT_PASSWORD().type(currentPass);
        this.accountDetailElements.NEW_PASSWORD().type(newPass);
        this.accountDetailElements.CONFIM_PASSWORD().type(newPass);
        this.accountDetailElements.UPDATE_ACCOUNT_DETAILS_BUTTON().click();
    }
//**************************************************************************************** */

//Selectors and methods to update plan details ******************************************* */

    billingInfoElements = {
        EDIT_PLAN_BUTTON: () => cy.get('div.plan-detail-block'),
        UPDATE_PLAN_BUTTON: () => cy.get('div.modal-content div.step-btn-wrap button.btn.btn-step.active'),
    }

    planDetailsElements = {
        SELECT_PAYMENT: () => cy.get('div.bill-block:not(.active)'),
    }

    paymentFormElements = {
        CARD_NUMBER: () => cy.get('input#formBasicCardNumber'),
        EXPIRATION: () => cy.get('input#formBasicExpiration'),
        CVV: () => cy.get('input#formBasicCVV'),
        ZIP_CODE: () => cy.get('input#formBasicZip')
    }

    updatePlanDetails() {
        this.billingInfoElements.EDIT_PLAN_BUTTON().contains('Plan Details')
            .parents('div.plan-detail-block').children('a').click();
        this.planDetailsElements.SELECT_PAYMENT().first().click();
        this.billingInfoElements.UPDATE_PLAN_BUTTON().click();
    }
    
    updateBillingInformation(cardNumber, expiration, cvv, zipCode) {
        this.billingInfoElements.EDIT_PLAN_BUTTON().contains('Payment')
            .parents('div.plan-detail-block').children('a').click();
        this.paymentFormElements.CARD_NUMBER().type(cardNumber);
        this.paymentFormElements.EXPIRATION().type(expiration);
        this.paymentFormElements.CVV().type(cvv);
        this.paymentFormElements.ZIP_CODE().type(zipCode);
        this.billingInfoElements.UPDATE_PLAN_BUTTON().click();
    }
//**************************************************************************************** */
}

export default PersonallInfoPage;