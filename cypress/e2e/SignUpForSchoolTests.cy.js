import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const { generateUser } = require('../support/user.generator');
const signUpAlertMessage = 'Sign up successfully';
const urlPart = '/auth/signup?step=schoolAccount';
const emailErrorMessage = 'Please enter valid email';

const user = generateUser();
const firstName = user.firstName;
const lastName = user.lastName;
const schoolCode = user.schoolCode;
const email = user.email;
const password = user.password;

describe("Sign Up for School tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.SIGN_UP_URL);
    })
    
    it('Create account for school use test', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, email, password);
        Actions.BasicActions.verifyUrl(urlPart);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyUrl('/portal/my-library');
        Actions.BasicActions.verifyAlertMessage(signUpAlertMessage);
        Actions.LandingPageActions.verifyUserNameDropDownList(firstName + ' ' + lastName);
        Actions.BasicActions.signOut();
    })

    it('Verify Sign Up for School account with blank fields', () => {
        const errorMessages = ['First Name required', 'Last Name required', 'Email required',
        'School code required', 'Password required', 'Re-enter password required'];

        Pages.SignUpPage.selectSchoolAccount();
        Pages.SignUpPage.clickCreateAccountButton();

        for(const error of errorMessages) {
            Actions.BasicActions.verifyErrorMessage(error);
        }
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with already registered email address', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_user@1secmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyAlertMessage('The email address is already in use by another account.');
        Actions.BasicActions.verifyUrl(urlPart);
    })

/**Negative tests for the FIRST NAME field ******************************************************************* */
    it('Verify registration with one character in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('L', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with 21 characters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('Bennybennybennybennyd', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with digits in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('12345', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with special symbols in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('!@#$%', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('Степан', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the LAST NAME field ******************************************************************** */
    it('Verify registration with one character in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'L', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with 21 characters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'Bennybennybennybennyd', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with digits in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, '12345', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with special symbols in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, '!@#$%', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with Cyrillic letters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'Гіга', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the EMAIL field ************************************************************************ */
    it('Verify registration with an email without a name', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, '@gmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with an email without the "@" symbol', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_usergmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with an email with two "@" symbols', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_@user@gmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with an email without a dot', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_user@gmailcom', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with dot in the end of an email address', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_user@1secmail.com.', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with dot in the beginning of an email address', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, '.new_user@1secmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
          Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with double dot character', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'new_user@1secmail..com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify registration with Cyrillic letters in the name of an email address', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, lastName, schoolCode, 'новий_юзер@1secmail.com', password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

/************************************************************************************************************* */
})