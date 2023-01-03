import Pages from "../page.objects/Pages";

class PersonalInfo {

    updatePersonalInfo(firstName, lastName, childsFirstName, childsLastName, childsBirthDate) {
        Pages.PersonalInfoPage.updatePersonalInfoFields(firstName, lastName,childsFirstName, childsLastName, childsBirthDate);
        Pages.PersonalInfoPage.clickUpdateButton();
        Pages.PersonalInfoPage.checkProfileUserName(firstName + ' ' + lastName);
        Pages.PersonalInfoPage.removeSecondChild();
        Pages.PersonalInfoPage.clickUpdateButton();
        Pages.PersonalInfoPage.checkChildNotExist();
    }

    updateAccountDetails(currentPass, newPass) {
        Pages.PersonalInfoPage.updateAccountDetailsFields(currentPass, newPass);
    }

    updatePayment(cardNumber, expiration, cvv, zipCode) {
        Pages.PersonalInfoPage.updatePlanDetails();
        Pages.PersonalInfoPage.updateBillingInformation(cardNumber, expiration, cvv, zipCode);
    }
}

export default PersonalInfo;