import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('VR Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('VR Page elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow VR');
        Actions.BasicActions.verifyUrl('/featured-vr-apps/')

        MarketingSitePages.VrPage.checkVrPageHeader();
        MarketingSitePages.VrPage.checkVrPageBody();
        MarketingSitePages.VrPage.checkVrPageContactForm();
        MarketingSitePages.VrPage.checkVrPageFooter();
    })
})