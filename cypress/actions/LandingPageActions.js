import Pages from "../page.objects/Pages";
import BassicAction from "./BasicActions";

class LandingPageActions extends BassicAction {

    verifyUserNameDropDownList(userName) {
        Pages.LandingPage.verifyUserName(userName);
        Pages.LandingPage.verifyDropdownListContent(userName);
    }

    goToProfilePage() {
        Pages.LandingPage.clickByName();
        Pages.LandingPage.clickByProfile();
    }

    verifyPage(){
        Pages.LandingPage.isVideoPlayButtonVisible()
        Pages.LandingPage.isSearchInputPresent()
        Pages.LandingPage.verifyCategories()
        Pages.LandingPage.CountOfCategories(20)
    }
    verifyCategories(){
        Pages.LandingPage.clickByAllCategories()
        Pages.LandingPage.clickByScience()
        Pages.LandingPage.isAnimationCategoriesVisible()
        Pages.LandingPage.CountOfCategories(20)
        Pages.LandingPage.clickByScience()
        Pages.LandingPage.isAnimationCategoriesVisible()
        Pages.LandingPage.CountOfCategories(20)
    }
    verifySearch(){
        Pages.LandingPage.search("Iceland")
        Pages.LandingPage.clickBySearchButton()
        Pages.LandingPage.isResultPresent()
        Pages.LandingPage.verifyCategoriesInSearchResult(1)
        Pages.LandingPage.clickByAllCategoriesInsearch()
        Pages.LandingPage.clickByAnimationInSearch()
        Pages.LandingPage.verifyCategoriesInSearchResult(1)
    }
}

export default LandingPageActions;