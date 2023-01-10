import LoginPage from "../page.objects/LoginPage"
import Pages from "../page.objects/Pages";
import BassicAction from "./BasicActions"

class LoginPageActions extends BassicAction{
    loginPage = new LoginPage()

    login(email, password) {
        Pages.LoginPage.fillLoginForm(email, password);
    }
    
    verifyPage() {
        Pages.LoginPage.verifyLoginFormElements();
    }

    enterEmail(email) {
        Pages.LoginPage.clickOnForgottPasswordLink();
        Pages.LoginPage.typeEmail(email);
        Pages.LoginPage.clickOnLoginButton();
        Pages.LoginPage.wait(2)
    }
}

export default LoginPageActions;