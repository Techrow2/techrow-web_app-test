import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const email = 'wertyses@qa.team';

describe('Login / Forgot Password test', () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
    })
    it('Verify forgot password functionality', () => {
        Actions.LoginPageActions.enterEmail(email, 'Reset your password for TechRow-Dev');
        Actions.BasicActions.verifyAlertMessage('The reset password email has been sent');

        Pages.LoginPage.openQaTeamMailPageToResetPassword('wertyses');

        Pages.LoginPage.enterNewPassword(Constants.validLoginPassword);
        Actions.BasicActions.verifyAlertMessage('Password has been updated successfully');
        Pages.LoginPage.clickOnLoginButton();

        Actions.BasicActions.verifyUrl('/auth/login');
        Actions.LoginPageActions.login(email, Constants.validLoginPassword);

        Actions.BasicActions.verifyUrl('/portal/my-library');
        Actions.LandingPageActions.verifyUserNameDropDownList('John Kim');

        Actions.BasicActions.signOut();
    })
})