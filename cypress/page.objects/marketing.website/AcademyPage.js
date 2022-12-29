import MarketingPage from "./MarketingPage";

const productItemTileArray = ['School', 'Households'];

class AcademyPage {
    marketingPage = new MarketingPage();

    checkAcademyPageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE().should('contain.text',
            'Tap into a library of innovative courses today');
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'COURSES');
        for(const tileName of productItemTileArray) {
            this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
                .should('contain.text', tileName);
        }
    }
}

export default AcademyPage;