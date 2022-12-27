import Actions from "../actions/Actions"
import Constants from "../constanst/Constants";

const { generateUser } = require('../support/user.generator');
const { generatePaymentCreds } = require('../support/payment.generator');
const signUpAlertMessage = 'Sign up successfully';

describe("Sign Up tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.SIGN_UP_URL);
    })
    
    it('Create account for school use test', () => {
        const user = generateUser();
        const firstName = user.firstName;
        const lastName = user.lastName;
        const schoolCode = user.schoolCode;
        const email = user.email;
        const password = user.password;

        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, email, password);
        Actions.BasicActions.verifyAlertMessage(signUpAlertMessage);
        Actions.LandingPageActions.verifyUserNameDropDownList(firstName + ' ' + lastName);
    })

    it('Create account for personal use test', () => {
        const user = generateUser();
        const userName = user.firstName + ' ' + user.lastName;
        const paymentCreds = generatePaymentCreds();
        
        Actions.SignUpPageActions.signUpForPersonalUsage(
            user.firstName,
            user.lastName,
            user.email,
            user.password);
        Actions.SignUpPageActions.selectAnualPaymentType(
            paymentCreds.creditCard,
            paymentCreds.expiration,
            paymentCreds.cvv,
            paymentCreds.zipCode,
            user.email
        );

        Actions.BasicActions.verifyAlertMessage(signUpAlertMessage);
        Actions.LandingPageActions.verifyUserNameDropDownList(userName);
    })

    afterEach(() => {
        Actions.BasicActions.signOut();
      })
})