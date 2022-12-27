
class BasicPage {
    
    click(locator,message){
        console.log("Click By Element:"+message)
        this.get(locator).click({force: true})
    }
    clickwithargs(locator){
        cy.get(locator).last().click()
    }
    get(locator){
        console.log("Get Element:"+locator)
        return cy.get(locator)
    }
    type(locator,message){
        console.log("Type in Element:"+message)
        this.get(locator).type(message)
    }
    wait(seconds){
        cy.wait(seconds*1000)
    }
    select(locator,selection){
        this.get(locator).select(selection)
    }
    url(){
        return cy.url()
    }
    visible(locator){
        this.get(locator).should("be.visible")
    }
}

export default BasicPage;