import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('VR Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Verify VR page elements', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('TechRow VR');
        Actions.BasicActions.verifyUrl('/featured-vr-apps/')

        MarketingSitePages.MarketingPage.checkMarketingPageHeader();
        MarketingSitePages.VrPage.checkVrPageBody();
        MarketingSitePages.MarketingPage.checkContactForm();
        MarketingSitePages.MarketingPage.checkMarketingPageFooter();
    })
})