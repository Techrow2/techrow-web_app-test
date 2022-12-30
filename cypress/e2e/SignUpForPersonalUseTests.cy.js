import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const { generateUser } = require('../support/user.generator');
const { generatePaymentCreds } = require('../support/payment.generator');

const signUpAlertMessage = 'Sign up successfully';
const urlPart = '/auth/signup?step=personalAccount'

const user = generateUser();
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;
const password = user.password;
const userName = user.firstName + ' ' + user.lastName;

const paymentCreds = generatePaymentCreds();

describe("Sign Up for Personal Use tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.SIGN_UP_URL);
    })

    it('Create account for personal use test', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(
            user.firstName,
            user.lastName,
            user.email,
            user.password);
        Pages.SignUpPage.clickCreateAccountButton();
        Pages.SignUpPage.openQaTeamMailPage(firstName + '_' + lastName);
       
        Actions.SignUpPageActions.selectAnualPaymentType(
            paymentCreds.creditCard,
            paymentCreds.expiration,
            paymentCreds.cvv,
            paymentCreds.zipCode,
            user.email
        );
        
        Actions.BasicActions.verifyUrl('/portal/my-library');
        // Actions.BasicActions.verifyAlertMessage(signUpAlertMessage);
        Actions.LandingPageActions.verifyUserNameDropDownList(userName);
        Actions.BasicActions.signOut();
    })

    it('Verify Sign Up for Personal Use account with blank fields', () => {
        const errorMessages = ['First Name required', 'Last Name required', 'Email required',
        'Password required', 'Re-enter password required'];

        Pages.SignUpPage.selectPersonalAccount();
        Pages.SignUpPage.clickCreateAccountButton();

        for(const error of errorMessages) {
            Actions.BasicActions.verifyErrorMessage(error);
        }
        Actions.BasicActions.verifyUrl(urlPart);
    })

/**Negative tests for the FIRST NAME field ******************************************************************* */
    it('Verify Sign Up for Personal Use account with one character in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('L', lastName, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with 21 characters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('Bennybennybennybennyd', lastName, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with digits in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('12345', lastName, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with special symbols in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('!@#$%', lastName, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('Степан', lastName, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the LAST NAME field ******************************************************************** */
    it('Verify Sign Up for Personal Use account with one character in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'L', email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with 21 characters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'Bennybennybennybennyd', email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with digits in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, '12345', email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with special symbols in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, '!@#$%', email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for Personal Use account with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'Гіга', email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

})