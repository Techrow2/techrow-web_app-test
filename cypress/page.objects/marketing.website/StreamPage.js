import MarketingPage from "./MarketingPage";

const productItemTileArray = ['School', 'Households'];

class StreamPage {

    marketingPage = new MarketingPage();

    checkStreamPageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE().should('contain.text',
            'Stream a world of beautiful educational content today!');
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'SUBSCRIBE');
        for(const tileName of productItemTileArray) {
            this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName).should('contain.text', tileName);
        }
    }
}

export default StreamPage;