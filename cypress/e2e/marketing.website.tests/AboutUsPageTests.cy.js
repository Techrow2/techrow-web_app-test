import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('About Us Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('About Us Page elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToHeader('About Us');
        Actions.BasicActions.verifyUrl('/about-us/');
        
        MarketingSitePages.AboutUsPage.checkAboutUsPageHeader();
        MarketingSitePages.AboutUsPage.checkAboutUsPageBody();
        MarketingSitePages.AboutUsPage.checkAboutUsPageFooter();
    })
})