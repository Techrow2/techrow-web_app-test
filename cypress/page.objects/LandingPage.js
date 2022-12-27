import BassicPage from "./BasicPage";
const nameInLandingPage="div.user-info:not(.m-0) button#dropdown-basic.btn",
list="a.dropdown-item",
playVideoButton="div.playpause",
searchInput="input.form-control",
categories="div.d-flex h1",
courseVideo="div.slider-wrap",
allCategoriesButton="button.p-0",
categoriesCheckBox="div.custom-checkbox",
science="Science",
searchButton="button.yellow-btn",
searchResult="div h3",
categoriesInSearchResult="span.animation-tag",
allcategoriesInSearch="div.dropdown:not(.sort-by-wrap) div.d-flex button.p-0",
animationInSearch=":nth-child(2) > label"

class LandingPage extends BassicPage {

    elements = {
        USER_NAME_LOCATOR: (userName) => cy.contains('button[id="dropdown-basic"]', userName),
        SEARCH_TEXT_FIELD_LOCATOR: () => cy.get('input.form-control'),
        SEARCH_BUTTON_LOCATOR: () => cy.get('button[class="btn yellow-btn sm mt-0"]'),
        USER_NAME_DROPDOWN_LIST_LOCATOR: () => cy.get('div.dropdown-menu'),
        VIDEO_ITEM_LOCATOR: () => cy.get('p.slider-title')
    }

    verifyUserName(userName) {
        this.elements.USER_NAME_LOCATOR(userName).should('contain.text', userName);
    }

    verifyDropdownListContent(userName) {
        this.elements.USER_NAME_LOCATOR(userName).click();
        this.elements.USER_NAME_DROPDOWN_LIST_LOCATOR().within(() => {
            cy.get('a').should('contain.text', 'Home')
            .and('contain.text', 'Profile')
            .and('contain.text', 'Contact Us')
            .and('contain.text', 'TechRow Website')
            .and('contain.text', 'Terms of Use')
            .and('contain.text', 'Privacy Policy')
            .and('contain.text', 'Sign out');
        })
    }

    navigateToVideoDetailPage(videoName) {
        this.elements.VIDEO_ITEM_LOCATOR().contains(videoName).siblings('a').click();
    }

    clickByName(){
        this.click(nameInLandingPage,"Click By"+nameInLandingPage)
    }
    clickByProfile(){
        this.wait(0.1)
        this.get(list).contains("Profile").click()
    }
    clickByHome(){
        this.wait(0.1)
        this.get(list).contains("Home").click()
    }
    clickByContactUs(){
        this.wait(0.1)
        this.get(list).contains("Contact Us").click()
    }
    clickBySighOut(){
        this.wait(0.1)
        this.get(list).contains("Sign out").click()
    }
    verifyList(){
        this.get(list).each(then=>{
            expect(then).be.visible
        })
    }
    isVideoPlayButtonVisible(){
        this.get(playVideoButton).should("be.visible")
    }
    isSearchInputPresent(){
        this.get(searchInput).should("be.visible")
    }
    search(categories){
        this.type(searchInput,categories)
    }
    verifyCategories(){
        this.get(categories).each(e=>{
            expect(e).be.visible
        })
    }
    CountOfCategories(count){
        this.get(courseVideo).should("have.length",count)
    }
    clickByAllCategories(){
        this.click(allCategoriesButton,"Click")
    }
    clickByScience(){
        let a=this.get(categoriesCheckBox).contains(science).parent(categoriesCheckBox)
        a.click()
    }
    clickByAnimationInSearch(){
        this.click(animationInSearch)
    }
    isAnimationCategoriesVisible(){
        this.get(categories).contains(science).should("be.visible")
    }
    clickBySearchButton(){
        this.click(searchButton,"Click")
    }
    isResultPresent(){
        this.get(searchResult).should("be.visible")
    }
    verifyCategoriesInSearchResult(count){
        this.get(categoriesInSearchResult).should("have.length",count)
    }
    clickByAllCategoriesInsearch(){
        this.click(allcategoriesInSearch,"")
    }
}

export default LandingPage;