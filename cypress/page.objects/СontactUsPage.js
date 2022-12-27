import BassicPage from "./BasicPage";

class ContactUsPage extends BassicPage {

    elements = {
        TITLE: () => cy.get('h4'),
        EMAIL: () => cy.get('input[type=email]'),
        SUBJECT: () => cy.get('input[name=subject]'),
        MESSAGE: () => cy.get('textarea[name=message]'),
        RECEIVE_LETTER_CHECKBOX: () => cy.get('input[type=checkbox]'),
        SEND_BUTTON: () => cy.get('button.btn.btn-step'),
        ERROR_MESSAGE: () => cy.get('div.alert-error-msg')
    }

    verifyContactUsElements(title, email) {
        this.elements.TITLE().should('contain.text', title);
        this.elements.EMAIL().should('have.value', email);
        this.elements.SUBJECT().siblings('label').should('contain.text', 'Subject ');
        this.elements.MESSAGE().siblings('label').should('contain.text', 'Message ');
        this.elements.RECEIVE_LETTER_CHECKBOX().should('be.visible');
        this.elements.SEND_BUTTON().should('contain.text', 'Send');
    }

    verifyQuestionFormFunctionality(subject, message) {
        this.elements.SUBJECT().type(subject);
        this.elements.MESSAGE().type(message);
        this.elements.SEND_BUTTON().click();
    }

    verifyFieldsAfterSendingQuestion() {
        this.elements.SUBJECT().should("be.empty");
        this.elements.MESSAGE().should("be.empty");
    }

    verifyErrorMessages(subjectError, messageError) {
        this.elements.ERROR_MESSAGE().first().should('contain.text', subjectError);
        this.elements.ERROR_MESSAGE().last().should('contain.text', messageError);
    }

    clickSendButton() {
        this.elements.SEND_BUTTON().click();
    }

    isErrorPresent(count){
        this.get(error).should("have.length",count)
    }
    isErrorNotPresent(){
        this.get(error).should("not.exist")
    }

}

export default ContactUsPage;