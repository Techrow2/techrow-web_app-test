
//Header items names
const headerItemsNamesArray = ['TechRow Stream', 'TechRow VR', 'TechRow Academy',
                               'TechRow Studio', 'Partner with Us', 'About Us'];
//Footer items names
const footerItemsNamesArray = ['K-12', 'Higher Education', 'Companies', 'Content Creators',
                               'TechRow Fund', 'Terms of Use', 'Privacy', 'Blog'];

class MarketingPage {
    
    headerElements = {
        HEADER_ITEM: (itemName) => cy.get('a.Header_HeaderNavLink__V4ENf').contains(itemName),
        LOGIN_BUTTON: () => cy.get('button.Header_HeaderBtn__lFDu0'),
    }
    
    bodyElements = {
        PAGE_TITLE: () => cy.get('div.banner-detail-wrap h1'),
        CONTACT_US_BUTTON: () => cy.get('div.banner-detail-wrap button'),
        VIDEO_LOCATOR: () => cy.get('video#video'),
        PRODUCT_ITEM_TILE: () => cy.get('div.ColumnGrid_CommonDetailWrap__b03fq'),
        NAVIGATION_HEADER_LINK: () => cy.get('div.Header_HeaderNav__flgwX'),
        NAVIGATION_FOOTER_LINK: () => cy.get('div.Footer_FooterNav__xXix7')
    }

    contactFormElements = {
        FIRST_NAME_INPUT: () => cy.get('input[label="First Name"]'),
        LAST_NAME_INPUT: () => cy.get('input[label="Last Name"]'),
        ORGANIZATION_NAME_INPUT: () => cy.get('input[label="Organization Name"]'),
        WORK_EMAIL_INPUT: () => cy.get('input[label="Work Email"]'),
        MESSAGE_INPUT: () => cy.get('textarea'),
        SUBMIT_BUTTON: () => cy.get('button.contact-submit-btn')
    }

    footerElements = {
        FOOTER_ITEM: (itemName) => cy.get('a.Footer_NavLink__KBVfv').contains(itemName)
    }

    checkMarketingPageHeader() {
        for(const elementName of headerItemsNamesArray) {
            this.headerElements.HEADER_ITEM(elementName).should('contain.text', elementName);
        }
        this.headerElements.LOGIN_BUTTON().should('contain.text', 'Login');
    }

    checkMarketingPageBody() {
        this.bodyElements.PAGE_TITLE().should('contain.text', 'The Silk Road of Next Generation Learning.');
        this.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        this.bodyElements.VIDEO_LOCATOR().should('be.visible');
        for(let i = 0; i < 4; i++) {
            this.bodyElements.PRODUCT_ITEM_TILE().contains('h2', headerItemsNamesArray[i])
                .should('contain.text', headerItemsNamesArray[i]);
            this.bodyElements.PRODUCT_ITEM_TILE().contains('a', 'LEARN MORE');
        }
    }

    checkContactForm() {
        this.contactFormElements.FIRST_NAME_INPUT().should('have.attr', 'label', 'First Name');
        this.contactFormElements.LAST_NAME_INPUT().should('have.attr', 'label', 'Last Name');
        this.contactFormElements.ORGANIZATION_NAME_INPUT().should('have.attr', 'label', 'Organization Name');
        this.contactFormElements.WORK_EMAIL_INPUT().should('have.attr', 'label', 'Work Email');
        this.contactFormElements.MESSAGE_INPUT().should('have.attr', 'label', 'Message');
        this.contactFormElements.SUBMIT_BUTTON().should('contain.text', 'SUBMIT');
    }

    checkMarketingPageFooter() {
        for(const elementName of footerItemsNamesArray) {
            this.footerElements.FOOTER_ITEM(elementName).should('contain.text', elementName);
        }
    }

    navigateToHeader(pageName) {
        this.bodyElements.NAVIGATION_HEADER_LINK().contains(pageName).click();
    }

    navigateToFooter(pageName) {
        this.bodyElements.NAVIGATION_FOOTER_LINK().contains(pageName).click();
    }

    navigateToAcademyPage(pageName) {
        this.headerElements.HEADER_ITEM(pageName)
            .invoke('attr', 'href').then(href => {
                const pom = {
                    url: href.toString()
                };
                cy.origin(pom.url, () => {
                    cy.visit('/');
                  })
            });
    }
}

export default MarketingPage;