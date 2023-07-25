//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions

describe('CustomSuite', function()
{
  it('Logintest-FirstTestCase', function ()
   
  {
    //To Open URL
    cy.visit('https://www.google.com')
   // cy.contains('Gmail').click()   
    cy.get('#APjFqb').type('Automation with Cypress')
  })
})