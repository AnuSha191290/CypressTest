/// <reference types="Cypress" />


describe('HooksdDemo', function () {

    before(function () {

        cy.log('********This is SETUP block********')
        // To load the particular file/data in the test cases
    })
    after(function () {

        cy.log('********This is TEAR DOWN block********')
        //  To quit the browser/browser instance/clear memory
    })

    beforeEach(function () {

        //it runs before each test case/it block
        cy.log('********This is LOGIN BLOCK********')
        // To open the particular website before each test case
    })
    afterEach(function () {

        //it runs after each test case/it block
        cy.log('********This is LOGOut BLOCK********')
        // To close the website after each test case
    })

    it('Search', function () {

        cy.log('********This is the test block for searching********')

    })

    it('Advanced Search', function () {

        cy.log('********This is the test block for Advanced searching********')

    })

    it('Listing Products', function () {


        cy.log('********This is the test block for Listing products********')
    })

})