import LoginPage from "./LoginPage";
import oneSecPage from "./oneSecPage";
import VideoDetailPage from "./VideoDetailPage";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import PersonallInfoPage from "./PersonalInfoPage";
import BasicPage from "./BasicPage";
import ContactUsPage from "./СontactUsPage";
import AdminPage from "./AdminPage";

class Pages {
    static BasicPage = new BasicPage();
    static LoginPage = new LoginPage();
    static SignUpPage = new SignUpPage();
    static LandingPage = new LandingPage();
    static PersonalInfoPage = new PersonallInfoPage();
    static VideoDetailPage = new VideoDetailPage();
    static ContactUsPage = new ContactUsPage();
    static AdminPage = new AdminPage();
    
    static oneSecPage = new oneSecPage();
}

export default Pages;