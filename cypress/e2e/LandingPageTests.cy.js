import Constants from "../constanst/Constants"
import Actions from "../actions/Actions";

describe("Landing Page tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
        Actions.LoginPageActions.login(Constants.validLoginEmail, Constants.validLoginPassword);
    })

    it("Verify Landing Page functionality", () => {
        Actions.BasicActions.verifyUrl('/portal/my-library');
        Actions.LandingPageActions.verifyUserNameDropDownList(Constants.validLoginUserName);

        Actions.LandingPageActions.verifyPage();
        Actions.LandingPageActions.verifyCategories();
        Actions.LandingPageActions.verifySearch();
        Actions.BasicActions.signOut();
    })
})