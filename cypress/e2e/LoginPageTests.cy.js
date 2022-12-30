import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const invalidEmailMessage = 'We couldn’t found any account registered with this Email Address';
const invalidPasswordMessage = 'The password is invalid or the user does not have a password.';

describe('Login page tests', () => {
    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
    })

    it('Verify Login with correct credentials', () => {
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login(Constants.validLoginEmail, Constants.validLoginPassword);
        Actions.BasicActions.verifyUrl('/portal/my-library');
        Actions.LandingPageActions.verifyUserNameDropDownList(Constants.validLoginUserName);
        Actions.BasicActions.signOut();
    })

    it('Verify Login with incorrect email and correct password', () => {
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login('incorrect' + Constants.validLoginEmail, Constants.validLoginPassword);
        Actions.BasicActions.verifyAlertMessage(invalidEmailMessage);
        Actions.BasicActions.verifyUrl('/auth/login');
    })

    it('Verify Login with incorrect password and correct email', () => {
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login(Constants.validLoginEmail, 'not' + Constants.validLoginPassword);
        Actions.BasicActions.verifyAlertMessage(invalidPasswordMessage);
        Actions.BasicActions.verifyUrl('/auth/login');
    })

    it('Verify Login with blank password and email fields', () => {
        const errorMessages = ['Email required', 'Password required'];
        Actions.LoginPageActions.verifyPage();
        Pages.LoginPage.clickOnLoginButton();
        for(const error of errorMessages) {
            Actions.BasicActions.verifyErrorMessage(error);
        }
        Actions.BasicActions.verifyUrl('/auth/login');
    })
})