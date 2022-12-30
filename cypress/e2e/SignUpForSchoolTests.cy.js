import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const { generateUser } = require('../support/user.generator');
const signUpAlertMessage = 'Sign up successfully';
const urlPart = '/auth/signup?step=schoolAccount';

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
        Actions.BasicActions.verifyUrl('/auth/signup?step=schoolAccount');
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

/**Negative tests for the FIRST NAME field ******************************************************************* */
    it('Verify Sign Up for School account with one character in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('L', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with 21 characters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('Bennybennybennybennyd', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with digits in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('12345', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with special symbols in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('!@#$%', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage('Степан', lastName, schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the LAST NAME field ******************************************************************** */
    it('Verify Sign Up for School account with one character in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'L', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with 21 characters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'Bennybennybennybennyd', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with digits in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, '12345', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with special symbols in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, '!@#$%', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('Verify Sign Up for School account with Cyrillic letters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForSchoolUsage(firstName, 'Гіга', schoolCode, email, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */
})