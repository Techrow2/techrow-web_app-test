import BassicPage from "./BasicPage"

     const login="input#login",
     domain="@1secmail.com",
     select="select#domain",
     checkemail="button[type=submit]",
     resetemail="Reset your password for TechRow-Dev",
     emailconfirm="a:contains(Verify Your Email with TechRow)",
     link="p>a"
class oneSecPage extends BassicPage { 
    visit(){
        cy.viewport(1280,720)
        this.wait(1)
         cy.visit("https://www.1secmail.com",)
    }
confirmEmail(){
    cy.task('load').then(email=>{
        this.select(select,domain)
        this.get(login).clear()
        this.type(login,email)
        this.click(checkemail)
        this.click(emailconfirm)
        this.click(link)
        this.wait(1)
        cy.url().then(r=>{
        cy.log(r)
        this.wait(2);
        cy.task("saveURL",this.getContinueUrl(r))
       })
    })  

}
gotoPaymentMethod(){
    cy.task('getURL').then(url=>{
        cy.visit(url)
  })
  this.wait(2)
}
getContinueUrl(url){
    let a=url.split("continueUrl=")
    let b=a[1].split("&")
    return b[0]
}
reset1secMail(email){
    this.beforereloadWithData(email)
    this.wait(2)
    this.click(checkemail)
    cy.contains(resetemail).click()
    this.click(link)
    this.wait(1)
}
 beforereloadWithData(email){
    this.select(select,domain)
    this.get(login).clear()
    this.type(login,email)
    this.click(checkemail)
 }
}export default oneSecPage