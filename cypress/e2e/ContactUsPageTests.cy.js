import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const { generateText } = require('../support/text.generator');
const info = generateText();
const title = 'Have a question? Contact us!';
const alertMessage = 'Thank you for contacting us!';

describe('Contact Us page tests', () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.LOGIN_URL);
        Actions.BasicActions.verifyUrl('/auth/login');
        Actions.LoginPageActions.login(Constants.validLoginEmail, Constants.validLoginPassword);
    })

    it('Verify contact us form functionality using valid credentials', () => {
        Actions.BasicActions.navigateToPage('Contact Us');
        Actions.BasicActions.verifyUrl('/portal/contact-us');

        Pages.ContactUsPage.verifyContactUsElements(title, Constants.validLoginEmail);
        Pages.ContactUsPage.verifyQuestionFormFunctionality(info.subject, info.message);
        Actions.BasicActions.verifyAlertMessage(alertMessage);
        Pages.ContactUsPage.verifyFieldsAfterSendingQuestion();
    })

    it('Verify contact us form error messages for blank subject and message fields', () => {
        const errorMessages = ['Subject required', 'Message required'];

        Actions.BasicActions.navigateToPage('Contact Us');
        Actions.BasicActions.verifyUrl('/portal/contact-us');

        Pages.ContactUsPage.verifyContactUsElements(title, Constants.validLoginEmail);
        Pages.ContactUsPage.clickSendButton();
        for(const error of errorMessages) {
            Actions.BasicActions.verifyErrorMessage(error);
        }
        Actions.BasicActions.verifyUrl('/portal/contact-us');
    })

    afterEach(() => {
        Actions.BasicActions.signOut();
      })
})