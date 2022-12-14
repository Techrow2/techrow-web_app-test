import Pages from "../page.objects/Pages";

class SignUpPageActions {

    signUpForSchoolUsage(firstName, lastName, schoolCode, email, password, repeatPass) {
        Pages.SignUpPage.selectSchoolAccount();
        Pages.SignUpPage.fillSignUpFormForSchoolUsage(firstName, lastName, schoolCode, email, password, repeatPass);
    }

    signUpForPersonalUsage(firstName, lastName, email, password, repeatPass) {
        Pages.SignUpPage.selectPersonalAccount();
        Pages.SignUpPage.fillSignUpFormForPersonalUsage(firstName, lastName, email, password, repeatPass);
    }

    selectAnualPaymentType(cardNumber, expiration, cvv, zipCode, email) {
        Pages.SignUpPage.selectAnualPayment();
        Pages.SignUpPage.fillPaymentForm(cardNumber, expiration, cvv, zipCode);
        Pages.SignUpPage.checkUserAndStartTrial(email)
    }
}

export default SignUpPageActions;