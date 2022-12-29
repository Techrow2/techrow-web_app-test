import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

describe("Detail page tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
        Actions.LoginPageActions.login(Constants.validLoginEmail, Constants.validLoginPassword);
    })

    it("Verify Detail page elements", () => {
        Pages.LandingPage.navigateToVideoDetailPage('Africa');
        Actions.BasicActions.verifyUrl('/portal/video-detail');
        Pages.VideoDetailPage.verifyVideoDetailsPageElements();
        Actions.BasicActions.signOut();
    })
})