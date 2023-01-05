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

    // loginAnother(email,password,clean){
    //     if(clean){
    //         this.loginPage.clearEmail()
    //         this.loginPage.clearPassword()
    //     }
    //     this.loginPage.typeEmail(email)
    //     this.loginPage.typePassword(password)
    //     this.loginPage.clickByLogginButton()
    // }
    // isErrorVissible(conditions){
    //     if(conditions)conditions="exist"
    //     else conditions="not.exist"
    //     this.loginPage.isErrorVisible(conditions)
    // }

    resetPassword(newPassword){
        this.loginPage.typeNewPassword(newPassword)
        this.loginPage.typeReEnterNewPassword(newPassword)
        this.loginPage.clickBySendLink()
        this.loginPage.wait(2)
        this.loginPage.clickByLogginButton()
    }

}

export default LoginPageActions;