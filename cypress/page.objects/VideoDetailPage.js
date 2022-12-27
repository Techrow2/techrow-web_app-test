
class VideoDetailPage {

    elements = {
        VIDEO_PLAYER: () => cy.get('div.vjs-poster'),
        BACK_HOME_LINK: () => cy.get('a.back-home-link'),
        CATEGORIES: () => cy.get('span.animation-tag'),
        VIDEO_PLAYER_BUTTON: () => cy.get('button.vjs-big-play-button'),
    }

    verifyVideoDetailsPageElements() {
        // this.elements.VIDEO_PLAYER().should('be.visible');
        this.elements.BACK_HOME_LINK().should('be.visible');
        this.elements.CATEGORIES().should('be.visible');
        // this.elements.VIDEO_PLAYER_BUTTON().should('be.visible');
    }
}

export default VideoDetailPage;