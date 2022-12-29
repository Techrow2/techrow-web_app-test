import MarketingPage from "./MarketingPage";

const productItemTileArray = ['K-12', 'Higher Education', 'Companies'];

class StudioPage {
    marketingPage = new MarketingPage();

    checkStudioPageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE()
            .should('contain.text', 'Create Immersive Content With TechRow Studio Today!');
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        for(const tileName of productItemTileArray) {
            this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
                .should('contain.text', tileName);
        }
    }
}

export default StudioPage;