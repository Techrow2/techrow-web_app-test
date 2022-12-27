import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Academy Page tests', () => {
    
    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Visit Academy Page', () => {
        MarketingSitePages.MarketingPage.navigateToAcademyPage('TechRow Academy');

        MarketingSitePages.AcademyPage.checkAcademyPageHeader();
        MarketingSitePages.AcademyPage.checkAcademyPageBody();
        MarketingSitePages.AcademyPage.checkAcademyPageContactForm();
        MarketingSitePages.AcademyPage.checkAcademyPageFooter();
    })
})