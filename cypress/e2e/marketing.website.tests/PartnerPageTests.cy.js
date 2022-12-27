import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('Partner Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('Partner Page Elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('Partner with Us');
        Actions.BasicActions.verifyUrl('/partner-with-us/')

        MarketingSitePages.PartnerPage.checkPartnerPageHeader();
        MarketingSitePages.PartnerPage.checkPartnerPageBody();
        MarketingSitePages.PartnerPage.checkPartnerPageContactForm();
        MarketingSitePages.PartnerPage.checkPartnerPageFooter();

    })
})