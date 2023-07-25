//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions

describe('CustomSuite', function()
{
  it('Logintest-FirstTestCase', function ()
   
  {
    //To Open URL
   cy.visit('https://www.automationtesting.co.uk/index.html');
   //cy.wait(5000);
   //cy.contains('CONTACT US FORM TEST').click();   
   //cy.contains('a:contains("Contact Us Form Test")').click({force: true});
    //cy.get('[name="first_name"]').type('Neha');
    
   cy.contains('DropDown Checkbox Radio').click({force: true});
    cy.get('#demo-priority-high').click({force: true});
   // cy.get('#cb_red').uncheck({force: true});
   ///////////////////////
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