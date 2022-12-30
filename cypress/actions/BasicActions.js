
class BasicActions {

    elements = {
        PROFILE_BUTTON: () => cy.get('button#dropdown-basic'),
        ALERT_MESSAGE: () => cy.get('h2.swal2-title'),
        DROPDOWN_ITEM_LINK: () => cy.get('a.dropdown-item'),
        ERROR_MESSAGE: () => cy.get('div.alert-error-msg')
    }

    visitPage(url) {
        cy.viewport(1280,720);
        cy.visit(url);
    }

    verifyUrl(urlPart) {
        cy.url().should('include', urlPart);
    }
    
    signOut() {
        this.elements.PROFILE_BUTTON().first().click();
        this.elements.DROPDOWN_ITEM_LINK().contains('Sign out').click({force: true});
        cy.clearCookies();
        cy.clearLocalStorage();
        cy.wait(1000);
    }

    verifyAlertMessage(message) {
        this.elements.ALERT_MESSAGE().should('contain.text', message);
    }

    verifyErrorMessage(message) {
        this.elements.ERROR_MESSAGE().should('contain.text', message);
    }

    navigateToPage(page) {
        this.elements.PROFILE_BUTTON().first().click();
        this.elements.DROPDOWN_ITEM_LINK().contains(page).click({force: true}); 
    }
}

export default BasicActions;