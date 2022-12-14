import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Stream page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify Stream page elements', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow Stream');
        Actions.BasicActions.verifyUrl('/techrow-stream/');
        
        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.StreamPage.checkStreamPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})