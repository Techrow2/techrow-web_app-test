import Actions from "../actions/Actions";
import Constants from "../constanst/Constants";
import Pages from "../page.objects/Pages";

const name = 'Kyiv School';
const code = 'QWERT';
const address = '7th Ave, Kyiv, UA 10001';
const city = 'Kyiv';
const district = 'Kyiv region';
const state = 'Ukraine';
const zipCode = '70107';
const taxeid = 'ID5001';
const domain = 'http://techrow-school.com';


describe('Admin Panel page tests', () => {

    beforeEach(() => {
        Actions.BasicActions.visitPage(Constants.ADMIN_PAGE_URL);
        Actions.BasicActions.verifyUrl('/admin/login');
        Actions.LoginPageActions.login(Constants.adminEmail, Constants.adminPassword);
    })
    
    it('Verify Create / Delete School functionality', () => {
        Actions.BasicActions.verifyUrl('/admin/school');
        Actions.AdminPageActions.verifyManageSchoolPage();
        Pages.AdminPage.clickOnAddSchoolButton()

        Actions.BasicActions.verifyUrl('/admin/school/add');
        Actions.AdminPageActions.createNewSchool(name, code, address, city, district, state, zipCode, taxeid, domain);
        Actions.BasicActions.verifyAlertMessage('School has been created successfully');
        Pages.AdminPage.clickOnBackLink();
        Actions.BasicActions.verifyUrl('/admin/school');
        Pages.AdminPage.verifyCreatedSchoolExist(name, code, address, city, district, state, zipCode, taxeid, domain);

        Pages.AdminPage.deleteSchool(name);
        Pages.AdminPage.clickOnConfirlDeleteButton();
        Pages.AdminPage.verifyDeletedSchoolNotExist(name, code, address, city, district, state, zipCode, taxeid, domain);
        Pages.AdminPage.clickOnLogoutLink();
        Actions.BasicActions.verifyUrl('/admin/login');
    })

    it('Verify Manage assets functionality', () => {
        Pages.AdminPage.navigateTo('Manage Assets');
        Actions.AdminPageActions.verifyAssetsPage();
        Actions.BasicActions.verifyAlertMessage('Asset has been updated successfully');
    })
})