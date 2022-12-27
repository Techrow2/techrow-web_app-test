
import SignUpPageActions from "./SignUpPageActions";
import LoginPageActions from "./LoginPageActions";
import LandingPageActions from "./LandingPageActions";
import PersonalInfoActions from "./PersonalInfoActions"
import BasicActions from "./BasicActions";
import AdminPageActions from "./AdminPageActions";

class Actions {
    static BasicActions = new BasicActions();
    static SignUpPageActions = new SignUpPageActions();
    static LoginPageActions = new LoginPageActions();
    static LandingPageActions = new LandingPageActions();
    static PersonalInfoActions = new PersonalInfoActions();
    static AdminPageActions = new AdminPageActions();
}

export default Actions;