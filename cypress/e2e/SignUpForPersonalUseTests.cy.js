import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const { generateUser } = require('../support/user.generator');
const { generatePaymentCreds } = require('../support/payment.generator');

const signUpAlertMessage = 'Sign up successfully';
const urlPart = '/auth/signup?step=personalAccount'
const emailErrorMessage = 'Please enter valid email';

const user = generateUser();
const firstName = user.firstName;
const lastName = user.lastName;
const email = user.email;
const password = user.password + '7';
const userName = firstName + '_' + lastName;

const paymentCreds = generatePaymentCreds();

describe("Sign Up for Personal Use tests", () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.SIGN_UP_URL);
    })

    it('Create account for personal use test', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Pages.SignUpPage.openQaTeamMailPage(userName);
       
        Actions.SignUpPageActions.selectAnualPaymentType(
            paymentCreds.creditCard,
            paymentCreds.expiration,
            paymentCreds.cvv,
            paymentCreds.zipCode,
            user.email
        );
        
        Actions.BasicActions.verifyUrl('/portal/my-library');
        // Actions.BasicActions.verifyAlertMessage(signUpAlertMessage);
        Actions.LandingPageActions.verifyUserNameDropDownList(firstName + ' ' + lastName);
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

    it('Verify Sign Up for Personal Use account with already registered email address', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_user@1secmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyAlertMessage('The email address is already in use by another account.');
        Actions.BasicActions.verifyUrl(urlPart);
    })

/**Negative tests for the FIRST NAME field ******************************************************************* */
    it('A user cannot register with one character in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('L', lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with 21 characters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('Bennybennybennybennyd', lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with digits in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('12345', lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with special symbols in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('!@#$%', lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage('Степан', lastName, email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('First Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the LAST NAME field ******************************************************************** */
    it('A user cannot register with one character in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'L', email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must be at least 2 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with 21 characters in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'Bennybennybennybennyd', email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name length must not exceed 20 characters');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with digits in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, '12345', email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with special symbols in the "Last Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, '!@#$%', email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with Cyrillic letters in the "First Name" field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, 'Гіга', email, password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage('Last Name must contain alphabets only');
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the EMAIL field ************************************************************************   */
    it('A user cannot register using an email without a name', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, '@gmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register using an email without the "@" symbol', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_usergmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register using an email with two "@" symbols', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_@user@gmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register using an email without a dot', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_user@gmailcom', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with dot in the end of an email address', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_user@1secmail.com.', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })
    
    it('A user cannot register with dot in the beginning of an email address', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, '.new_user@1secmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with double dot in the email address', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'new_user@1secmail..com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with Cyrillic letters in the name of an email address', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, 'новий_юзер@1secmail.com', password, password);
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(emailErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */

/**Negative tests for the PASSWORD / REPEAT PASSWORD field *************************************************** */
    it('A user cannot register with 7 valid characters in the password field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, 'abc1234', 'abc1234');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(passwordErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with 9 alphabetic characters in the password field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, 'asdfghjkl', 'asdfghjkl');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(passwordErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with 9 digits in the password field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, '123456789', '123456789');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(passwordErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with 9 special symbols in the password field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, '!@#$%^&*(', '!@#$%^&*(');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(passwordErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register with Cyrillic letters in the password field', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, 'паролль1234', 'паролль1234');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage(passwordErrorMessage);
        Actions.BasicActions.verifyUrl(urlPart);
    })

    it('A user cannot register if password does not match the password in the repeat password feald', () => {
        Actions.SignUpPageActions.signUpForPersonalUsage(firstName, lastName, schoolCode, email, 'newPassword123', 'newPassword124');
        Pages.SignUpPage.clickCreateAccountButton();
        Actions.BasicActions.verifyErrorMessage("Re-enter password didn't match");
        Actions.BasicActions.verifyUrl(urlPart);
    })
/************************************************************************************************************* */
})