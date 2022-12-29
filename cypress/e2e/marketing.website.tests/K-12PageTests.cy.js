import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('K-12 Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify K-12 page elements', () => {
        MarketingSitePages.MarketingPage.navigateToFooter('K-12');
        Actions.BasicActions.verifyUrl('/k-12/')
        
        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.K12Page.checkK12PageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})