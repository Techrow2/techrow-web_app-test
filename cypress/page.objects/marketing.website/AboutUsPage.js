import MarketingPage from "./MarketingPage";

const pageTitleDescription = 'TechRow is an immersive media network that focuses on early college, career and life readiness. We are reimagining education by making experiential learning accessible to all students.'
const contentSectionTitlesArray = ['Expand Your Mind with TechRow Academy Courses',
'The AT&T Aspire Accelerator Class of 2020 is Developing EdTech Amidst a Pandemic',
'Interdisciplinary Perspectives on Virtual Place-Based Learning',
'The Promise of Immersive Learning: Augmented and Virtual Reality’s Potential in Education'];

class AboutUsPage {
    marketingPage = new MarketingPage();

    bodyElements = {
        PAGE_INTRODUCTION: () => cy.get('p.about-detail-wrap'),
        NEWS_ROOM_TITLE: () => cy.get('h2.AboutUs_TabHeading__vb3Wv'),
        NEWS_SECTIONS_BAR: () => cy.get('li.nav-item button'),
        NEWS_SECTION_CONTENT_TITLE: () => cy.get('div.BlogList_TabDetail__QIPu1')
    }

    checkAboutUsPageBody() {
        this.bodyElements.PAGE_INTRODUCTION()
            .should('contain.text', pageTitleDescription);
        this.bodyElements.NEWS_ROOM_TITLE().should('contain.text', 'The Newsroom');
        this.bodyElements.NEWS_SECTIONS_BAR().should('have.length', 3)
            .then(($els) => {
                return (Cypress.$.makeArray($els).map((el) => el.innerText));
            })
            .should('deep.equal', ['NEWS', 'PRESS RELEASES', 'BLOG']);
        for(const contentTitle of contentSectionTitlesArray) {
            this.bodyElements.NEWS_SECTION_CONTENT_TITLE().contains('h3', contentTitle)
                .should('contain.text', contentTitle);
        }
        
    }
}

export default AboutUsPage;