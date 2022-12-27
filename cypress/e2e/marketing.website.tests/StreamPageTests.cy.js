import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Stream page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Stream page elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow Stream');
        Actions.BasicActions.verifyUrl('/techrow-stream/');
        
        MarketingSitePages.StreamPage.checkStreamPageHeader();
        MarketingSitePages.StreamPage.checkStreamPageBody();
        MarketingSitePages.StreamPage.checkStreamPageContactForm();
        MarketingSitePages.StreamPage.checkStreamPageFooter();
    })
})