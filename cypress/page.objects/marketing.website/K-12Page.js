import MarketingPage from "./MarketingPage";


const productItemTileArray = ['Parent Engagement', 'Student Engagement', 
'Teacher Engagement', 'Customizable'];

class K12Page {
    marketingPage = new MarketingPage();

    checkK12PageHeader() {
        this.marketingPage.checkMarketingPageHeader();
    }

    checkK12PageFooter() {
        this.marketingPage.checkMarketingPageFooter();
    }

    checkK12PageContactForm() {
        this.marketingPage.checkContactForm();
    }

    checkK12PageBody() {
        this.marketingPage.bodyElements.PAGE_TITLE()
            .should('contain.text', "Let's Create Next Generation Learning and Outreach Strategies, Together!");
        this.marketingPage.bodyElements.CONTACT_US_BUTTON().should('contain.text', 'CONTACT US');
        for(const tileName of productItemTileArray) {
            this.marketingPage.bodyElements.PRODUCT_ITEM_TILE().contains('h2', tileName)
                .should('contain.text', tileName);
        }
    }
}

export default K12Page;