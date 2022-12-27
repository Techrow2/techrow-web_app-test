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

    loginAnother(email,password,clean){
        if(clean){
            this.loginPage.clearEmail()
            this.loginPage.clearPassword()
        }
        this.loginPage.typeEmail(email)
        this.loginPage.typePassword(password)
        this.loginPage.clickByLogginButton()
    }
    isErrorVissible(conditions){
        if(conditions)conditions="exist"
        else conditions="not.exist"
        this.loginPage.isErrorVisible(conditions)
    }
    resetPassword(email){
        this.loginPage.clickByForgottPassword()
        this.loginPage.clickByBacktoLogin()
        this.loginPage.clickByForgottPassword()
        this.loginPage.typeEmailInForgottPage(email)
        this.loginPage.clickBySendLink()
        this.loginPage.wait(2)
    }
    newPassword(pass){
        this.loginPage.typeNewPassword(pass)
        this.loginPage.typeReEnterNewPassword(pass)
        this.loginPage.clickBySendLink()
        this.loginPage.wait(2)
        this.loginPage.clickByLogginButton()
    }

}

export default LoginPageActions;