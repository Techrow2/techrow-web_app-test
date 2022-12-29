import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";

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

    it('Verify Login with incorrect email', () => {
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login('not' + Constants.validLoginEmail, Constants.validLoginPassword);
        Actions.BasicActions.verifyAlertMessage(invalidEmailMessage);
    })

    it('Verify Login with incorrect password', () => {
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login(Constants.validLoginEmail, 'not' + Constants.validLoginPassword);
        Actions.BasicActions.verifyAlertMessage(invalidPasswordMessage);
    })
})