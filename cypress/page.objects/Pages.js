import LoginPage from "./LoginPage";
import VideoDetailPage from "./VideoDetailPage";
import LandingPage from "./LandingPage";
import SignUpPage from "./SignUpPage";
import PersonallInfoPage from "./PersonalInfoPage";
import BasicPage from "./BasicPage";
import AdminPage from "./AdminPage";
import ContactUsPage from "./СontactUsPage";

class Pages {
    static BasicPage = new BasicPage();
    static LoginPage = new LoginPage();
    static SignUpPage = new SignUpPage();
    static LandingPage = new LandingPage();
    static PersonalInfoPage = new PersonallInfoPage();
    static VideoDetailPage = new VideoDetailPage();
    static ContactUsPage = new ContactUsPage();
    static AdminPage = new AdminPage();
}

export default Pages;