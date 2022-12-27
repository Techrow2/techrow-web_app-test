import Actions from "../../actions/Actions";
import Constants from "../../constanst/Constants";
import MarketingSitePages from "../../page.objects/marketing.website/MarketingSitePages";

describe('K-12 Page tests', () => {

    before(() => {
        Actions.BasicActions.visitPage(Constants.MARKETING_PAGE_URL);
    })

    it('K-12 Page elements tests', () => {
        MarketingSitePages.MarketingPage.navigateToFooter('K-12');
        Actions.BasicActions.verifyUrl('/k-12/')
        
        MarketingSitePages.K12Page.checkK12PageHeader();
        MarketingSitePages.K12Page.checkK12PageBody();
        MarketingSitePages.K12Page.checkK12PageContactForm();
        MarketingSitePages.K12Page.checkK12PageFooter();
    })
})