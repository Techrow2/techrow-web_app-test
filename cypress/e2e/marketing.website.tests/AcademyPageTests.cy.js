import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Academy Page tests', () => {
    
    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify Academy page elements', () => {
        // MarketingSitePages.MarketingPage.navigateToAcademyPage('TechRow Academy');

        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.AcademyPage.checkAcademyPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})