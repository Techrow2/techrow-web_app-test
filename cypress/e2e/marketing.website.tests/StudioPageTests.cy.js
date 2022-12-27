import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Studio Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Studio Page elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow Studio');
        Actions.BasicActions.verifyUrl('/techrow-studio/')

        MarketingSitePages.StudioPage.checkStudioPageHeader();
        MarketingSitePages.StudioPage.checkStudioPageBody();
        MarketingSitePages.StudioPage.checkStudioPageContactForm();
        MarketingSitePages.StudioPage.checkStudioPageFooter();
    })
})