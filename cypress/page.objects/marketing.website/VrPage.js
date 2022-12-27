import MarketingPage from "./MarketingPage";

const productItemTileArray = ['Accessible', 'Engaging', 'Customizable'];

class VrPage {
    marketinPage = new MarketingPage();

    vrPageElements = {
        EDUCATION_TYPE: () => cy.get('div.ColumnGrid_CommonDetailWrap__b03fq'),
    }

    checkVrPageHeader() {
        this.marketinPage.checkMarketingPageHeader();
    }

    checkVrPageFooter() {
        this.marketinPage.checkMarketingPageFooter();
    }

    checkVrPageContactForm() {
        this.marketinPage.checkContactForm();
    }

    checkVrPageBody() {
        this.marketinPage.bodyElements.PAGE_TITLE().should('contain.text',
            'Unleash the learning power of experience, excursion and immersion with our all-in-one  VR solution');
        this.marketinPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        for(const tileName of productItemTileArray) {
            this.marketinPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
                .should('contain.text', tileName);
        }
    }
}

export default VrPage;