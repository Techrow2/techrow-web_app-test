import MarketingPage from "./MarketingPage";

const productItemTileArray = ['Great Idea for a Course?',
                              'Want to Distribute a Cool Educational VR App?',
                              'Ready to Distribute Engaging Educational Content?'];

class PartnerPage {
    marketingPage = new MarketingPage();

    checkPartnerPageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE().should('contain.text', 'Partner with TechRow');
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        for(const tileName of productItemTileArray) {
            this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
                .should('contain.text', tileName);
        }
    }
}

export default PartnerPage;