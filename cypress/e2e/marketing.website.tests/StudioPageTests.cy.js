import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Studio Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify Studio page elements', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow Studio');
        Actions.BasicActions.verifyUrl('/techrow-studio/')

        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.StudioPage.checkStudioPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})