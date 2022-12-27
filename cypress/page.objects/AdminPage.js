import BassicPage from "./BasicPage";
const schoolList="div.container-fluid",
listHead="thead th",
linklist="a.c-sidebar-nav-link",
createSchoolButton="button.btn",
deleteSchool="span",
schoollist1="table tr",
cancelButton=".swal2-cancel",
syncronizeButton="button.btn-admin",
refactorButton="tr td a.btn-info",
video="video",
categoriesInput="input#search_input",
animation="ul.optionContainer li",
closeIcon="img.closeIcon",
animationInCategories="span.chip",
updateButton="button.btn-step"

const sidebarElementsNames = ['Manage School', 'Manage Assets', 'Account/Users',
'Manage Plan', 'Transactions'];
const schoolListTableColumns = ['S.No', 'School Name', 'School Code', 'Address',
'Tax ID', 'Domain URL', 'Action'];

class AdminPage extends BassicPage {

/** Manage School Page elements and methods******************************************************* */
    manageSchoolElements = {
        TABLE_TITLE: () => cy.get('div.custom-card-header h4'),
        SCHOOL_TABLE_COLUMN: () => cy.get('thead th'),
        SIDEBAR_LINKS: () => cy.get('a.c-sidebar-nav-link'),
        ADD_SCHOOL_BUTTON: () => cy.get('a.btn.btn-admin'),
        CONFIRM_DELETE_BUTTON: () => cy.get('button.swal2-confirm'),
        TABLE_BODY_ELEMENTS: () => cy.get('tbody tr'),
        LOGOUT_LINK: () => cy.get('div.c-avatar-info'),
    }

    verifySidebarElements() {
        for(const elementName of sidebarElementsNames) {
            this.manageSchoolElements.SIDEBAR_LINKS().should('contain.text', elementName);
        }
    }

    verifySchoolTableColumns() {
        this.manageSchoolElements.TABLE_TITLE().should('contain.text', 'School List');
        for(const elementName of schoolListTableColumns) {
            this.manageSchoolElements.SCHOOL_TABLE_COLUMN().should('contain.text', elementName);
        }
    }

    verifyCreatedSchoolExist(name, code, address, city, district, state, zipCode, taxeid, domain) {
        const credsArray = [name, code, address, city, district, state, zipCode, taxeid, domain];
        for(const columnValue of credsArray) {
            this.manageSchoolElements.TABLE_BODY_ELEMENTS().children('td')
                .should('contain.text', columnValue);
        }
    }

    verifyDeletedSchoolNotExist(name, code, address, city, district, state, zipCode, taxeid, domain) {
        const credsArray = [name, code, address, city, district, state, zipCode, taxeid, domain];
        for(const columnValue of credsArray) {
            this.manageSchoolElements.TABLE_BODY_ELEMENTS().children('td').contains(columnValue)
                .should('not.exist');
        }
    }

    deleteSchool(name) {
            this.manageSchoolElements.TABLE_BODY_ELEMENTS().children('td')
                .contains(name).siblings('td.action-wrap').children('span').click();
    }

    clickOnAddSchoolButton() {
        this.manageSchoolElements.ADD_SCHOOL_BUTTON()
            .should('contain.text', 'Add School').click();
    }

    clickOnConfirlDeleteButton() {
        this.manageSchoolElements.CONFIRM_DELETE_BUTTON()
            .should('contain.text', 'Yes').click();
    }

    clickOnLogoutLink() {
        this.manageSchoolElements.LOGOUT_LINK()
            .should('contain.text', 'Logout').click();
    }
/********************************************************************************************** */

/** Add School Page elements and methods******************************************************* */
    addSchoolElements = {
        SCHOOL_NAME_FIELD: () => cy.get('input[name=name]'),
        SCHOOL_CODE_FIELD: () => cy.get('input[name=uniqueCode]'),
        SCHOOL_ADDRESS_FIELD: () => cy.get('input[name=address]'),
        SCHOOL_CITY_FIELD: () => cy.get('input[name=city]'),
        SCHOOL_DISTRICT_FIELD: () => cy.get('input[name=district]'),
        SCHOOL_STATE_FIELD: () => cy.get('input[name=state]'),
        SCHOOL_ZIP_CODE_FIELD: () => cy.get('input[name=zipCode]'),
        SCHOOL_TAXEXID_FIELD: () => cy.get('input[name=taxexid]'),
        SCHOOL_DOMAIN_URL_FIELD: () => cy.get('input[name=domainUrl]'),
        CREATE_SCOOL_BUTTON: () => cy.get('button.btn'),
        BACK_LINK: () => cy.get('h4 ~a')
    }

    verifyAddSchoolPage() {
        this.addSchoolElements.SCHOOL_NAME_FIELD().siblings('label').should('contain.text', 'School Name ');
        this.addSchoolElements.SCHOOL_CODE_FIELD().siblings('label').should('contain.text', 'School Code ');
        this.addSchoolElements.SCHOOL_ADDRESS_FIELD().siblings('label').should('contain.text', 'Address ');
        this.addSchoolElements.SCHOOL_CITY_FIELD().siblings('label').should('contain.text', 'City ');
        this.addSchoolElements.SCHOOL_DISTRICT_FIELD().siblings('label').should('contain.text', 'District');
        this.addSchoolElements.SCHOOL_STATE_FIELD().siblings('label').should('contain.text', 'State ');
        this.addSchoolElements.SCHOOL_ZIP_CODE_FIELD().siblings('label').should('contain.text', 'Zip Code');
        this.addSchoolElements.SCHOOL_TAXEXID_FIELD().siblings('label').should('contain.text', 'Taxexid');
        this.addSchoolElements.SCHOOL_DOMAIN_URL_FIELD().siblings('label').should('contain.text', 'Domain URL ');
    }

    fillAddSchoolForm(name, code, address, city, district, state, zipCode, taxeid, domain) {
        this.addSchoolElements.SCHOOL_NAME_FIELD().type(name);
        this.addSchoolElements.SCHOOL_CODE_FIELD().clear().type(code);
        this.addSchoolElements.SCHOOL_ADDRESS_FIELD().type(address);
        this.addSchoolElements.SCHOOL_CITY_FIELD().type(city);
        this.addSchoolElements.SCHOOL_DISTRICT_FIELD().type(district);
        this.addSchoolElements.SCHOOL_STATE_FIELD().type(state);
        this.addSchoolElements.SCHOOL_ZIP_CODE_FIELD().type(zipCode);
        this.addSchoolElements.SCHOOL_TAXEXID_FIELD().type(taxeid);
        this.addSchoolElements.SCHOOL_DOMAIN_URL_FIELD().type(domain);
    }

    clickOnCreateSchoolButton() {
        this.addSchoolElements.CREATE_SCOOL_BUTTON()
            .should('contain.text', 'CREATE SCHOOL').click();
    }

    clickOnBackLink() {
        this.addSchoolElements.BACK_LINK()
            .should('contain.text', 'Back').click();
    }

/********************************************************************************************** */


isSchoolListPresent(){
    this.get(schoolList).should("be.visible")
}
isListHeadElementPresent(){
    this.get(listHead).each(el=>{
        expect(el).be.visible
    })
}
goToManageSchool(){
    this.get(linklist).first().click()
}
isLinkListPresent(){
    this.get(linklist).each(el=>{
        expect(el).be.visible
    })
}
goToManageAssets(){
    this.get(linklist).parent().eq(1).click()
}
isNameInSchoolPresent(){
    this.get(nameInAddSchool).should("be.visible")
}
isUniqueCodeInSchoolPresent(){
    this.get(UniqueCode).should("be.visible")
}
isAdressInAddSchoolPresent(){
    this.get(addresInaddschool).should("be.visible")
}
isCityInAddSchoolPresent(){
    this.get(cityInAddSchool).should("be.visible")
}
isZipCodeInAddPresent(){
    this.get(zipCode).should("be.visible")
}
isStateInAddSchoolPresent(){
    this.get(state).should("be.visible")
}
isDistrictInAddSchoolPresent(){
    this.get(district).should("be.visible")
}
isTaxexIdInAddSchoolPresent(){
    this.get(taxexId).should("be.visible")
}
isDomainUrlInAddSchoolPresent(){
    this.get(domainUrl).should("be.visible")
}
clickByAddSchool(){
    this.click(addSchool,"Add School Link")
}
clickByBack(){
    this.click(backLink,"Back Link")
}
clickByCreateButton(){
    this.click(createSchoolButton,"School Button")
}
typeName(message){
    this.type(nameInAddSchool,message)
}
typeUniqueCode(code){
    this.type(UniqueCode,code)
}
typeState(st){
    this.type(state,st)
}
typeDomainUrl(url){
    this.type(domainUrl,url)
}
typeZipCode(code){
    this.type(zipCode,code)
}
typeAddress(addrs){
    this.type(addresInaddschool,addrs)
}
typeDistrict(dis){
    this.type(district,dis)
}
typeCity(city){
    this.type(cityInAddSchool,city)
}
deleteSchool2(){
    this.wait(4)
    this.get(schoollist1).contains("Techrow beta").parent("tr").children("td").children(deleteSchool).click()
    this.wait(1)
    this.get(confirmDeleteButton).click()
}
isAddSchoolButtonPresent(){
    this.get(addSchool).should("be.visible")
}
cancelDEleteSchool(){
    this.wait(4)
    this.get(schoollist1).contains("Techrow beta").parent("tr").children("td").children(deleteSchool).click()
    this.get(cancelButton).click()
}
isSyncronizeButtonPresent(){
    this.get(syncronizeButton).should("be.visible")
}
clickByRefactor(){
    this.get(refactorButton).first().click()
}
typeInCategorias(categoria){
    this.get(categoriesInput).first().type(categoria)
    this.get(animation).first().click()
}
isVideoPresent(){
    this.get(video).should("be.visible")
}
closeAnimationInCategories(){
    this.get(animationInCategories).contains("Science").children(closeIcon).click()
}
clickByUpdateButton(){
    this.click(updateButton,"Update Button")
}
}

export default AdminPage;