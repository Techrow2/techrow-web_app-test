import MarketingPage from "./MarketingPage";

const productItemTileArray = ['Engaging', 'Innovative', 'Outside the Box'];

class HigherEducationPage {
    marketingPage = new MarketingPage;

    checkHigherEducationPageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE()
        .should('contain.text', 'Reimagine Student Recruitment and Engagement');
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        for(const tileName of productItemTileArray) {
        this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
            .should('contain.text', tileName);
        }
    }
}

export default HigherEducationPage;