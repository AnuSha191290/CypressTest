describe('Verify Browser Stack Home Page', () => {

    it('Verify Browserstack logo is visible', () => {

        // cy.visit('https://www.browserstack.com/');
        cy.visit('https://www.browserstack.com/');

        cy.get('#logo').should('be.visible');

    })

    it('Verify Header is present', () => {

        cy.get('h1').first().should('be.exist');

    })
})