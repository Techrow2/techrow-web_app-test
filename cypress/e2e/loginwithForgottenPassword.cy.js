import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

describe('Login via Forgot Password test', () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
    })
    it('Verify forgot password functionality', () => {
        Actions.LoginPageActions.resetPassword(Constants.EmailForForgottPasword+"@1secmail.com")
        Pages.oneSecPage.visit()
        Pages.oneSecPage.wait(2)
        Pages.oneSecPage.reset1secMail(Constants.EmailForForgottPasword)
        Actions.LoginPageActions.newPassword("A123456789")
    })
})