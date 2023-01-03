import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";

const { generatePaymentCreds } = require('../support/payment.generator');

describe('Personal information page tests', () => {
    
    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.LoginPageActions.verifyPage();
        Actions.LoginPageActions.login(Constants.validLoginEmail, Constants.validLoginPassword);
    })

    it('Verify and update personal information form', () => {
        Actions.BasicActions.navigateToPage('Profile');

        Actions.PersonalInfoActions.updatePersonalInfo('Ivo', 'Bobul', 'Givi', 'Bobul', '07-Jul-2017');
        Actions.BasicActions.verifyAlertMessage('User Profile updated successfully!');
        //Change data to default user creds
        Actions.PersonalInfoActions.updatePersonalInfo('Jane', 'Smith', 'Bob', 'Smith', '06-Jul-2018');
    })

    it('Verify and update account details form', () => {
        Actions.BasicActions.navigateToPage('Profile');

        Actions.PersonalInfoActions.updateAccountDetails(Constants.validLoginPassword, 'A123456789B');
        Actions.BasicActions.verifyAlertMessage('Password updated successfully!');
        //Change data to default user creds
        Actions.PersonalInfoActions.updateAccountDetails('A123456789B', Constants.validLoginPassword);
    })

    it('Verify payment details form', () => {
        const paymentCreds = generatePaymentCreds();

        Actions.BasicActions.navigateToPage('Profile');
        Actions.PersonalInfoActions.updatePayment(
            paymentCreds.creditCard,
            paymentCreds.expiration,
            paymentCreds.cvv,
            paymentCreds.zipCode
        );
    })

    afterEach(() => {
        Actions.BasicActions.signOut();
    })
})