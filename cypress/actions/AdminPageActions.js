import Pages from "../page.objects/Pages";
import BassicAction from "./BasicActions";

class AdminPageActions extends BassicAction {

    verifyManageSchoolPage() {
        Pages.AdminPage.verifySidebarElements();
        Pages.AdminPage.verifySchoolTableColumns();
    }

    createNewSchool(name, code, address, city, district, state, zipCode, taxeid, domain) {
         Pages.AdminPage.verifyAddSchoolPage();
         Pages.AdminPage.fillAddSchoolForm(name, code, address, city, district, state, zipCode, taxeid, domain);
         Pages.AdminPage.clickOnCreateSchoolButton();
    }


    verifyAssetsPage() {
         Pages.AdminPage.isSyncronizeButtonPresent()
         Pages.AdminPage.clickByRefactor()
         Pages.AdminPage.isVideoPresent()
         Pages.AdminPage.closeAnimationInCategories()
         Pages.AdminPage.typeInCategorias("Art")
         Pages.AdminPage.clickByUpdateButton()
    }
}

export default AdminPageActions;