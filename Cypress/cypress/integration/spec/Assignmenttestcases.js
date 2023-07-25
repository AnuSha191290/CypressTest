//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions

describe('CustomSuite', function () {
    it('Logintest-FirstTestCase', function () {
        
        cy.visit('https://automationteststore.com/');
       
        cy.contains('Login or register').click({ force: true });
        cy.get('#loginFrm_loginname').type('Nbhise');
        cy.get('#loginFrm_password').type('test123');
        cy.contains('Login').click();
        cy.get('.pull-right').eq(1).click({ force: true });
        //cy.xpath("//input[@id='loginFrm_loginname']").type('Nbhise');
        //cy.xpath("//input[@type='password']").type('Test_12345');
        //cy.get('button[title="Login"]').click();
        //Describe Cypress Assertions
       
        //After Successfull Login- Verify Correct Page- 1. Expected Text on home page after login
        cy.get('.maintext').should('have.text',' My Account');
        
        //2. Check with Expected URL
        cy.url().should('be.equal', 'https://automationteststore.com/index.php?rt=account/account');

        //3. Check with Multiple Assertions
        cy.contains('Welcome back').should('have.class', 'top menu_account').and('have.attr','href', 'https://automationteststore.com/index.php?rt=account/account');
    })
})


