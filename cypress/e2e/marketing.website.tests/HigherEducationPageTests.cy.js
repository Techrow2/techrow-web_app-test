import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Higher Education page tests', () => {
    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify Higher Education page elements', () => {
        MarketingSitePages.MarketingPage.navigateToFooter('Higher Education');
        Actions.BasicActions.verifyUrl('/higher-education/');

        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.HigherEducationPage.checkHigherEducationPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})