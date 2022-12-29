import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Partner Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify Partner page elements', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('Partner with Us');
        Actions.BasicActions.verifyUrl('/partner-with-us/')

        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.PartnerPage.checkPartnerPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();

    })
})