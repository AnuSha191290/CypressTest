//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions

describe('Test suite contain 4 Test cases', function () {
    //Different Hooks
    before('Visit URL', function () {
        // baseURL DEFINE IN CYPRESS.JSON FILE 
        cy.visit("/");
    });

    beforeEach(() => {
        cy.log('Test case Execution has started');
    });

    //TEST CASE 1
    it('Registration_Logintest_Assertion-FirstTestCase', function () {

        //Registration of a new user 
        cy.get('#loginPanel > :nth-child(3) > a').click({ force: true });
        cy.get('input[name="customer.firstName"]').type('Test');
        cy.xpath("//input[@id='customer.lastName']").type('User');
        cy.get('input[id="customer.address.street"]').type('test123');
        cy.xpath("//input[@id='customer.address.city']").type('User');
        cy.get('.input').eq(6).type('123 User');
        cy.xpath("//input[@id='customer.address.zipCode']").type('H2C1T9');
        cy.get('input[name="customer.username"]').type('test115');
        cy.get('input[name="customer.password"]').type('test');
        cy.get('#repeatedPassword').type('test');
        cy.xpath("//input[@id='customer.phoneNumber']").type('+1438-456-9090');
        cy.xpath("//input[@id='customer.ssn']").type('9897345384');
        cy.get('input[value="Register"]').click();

        // Assertions to verify successful Login of the new user
        cy.get('.title').invoke('text').should('include', 'Welcome ')
        cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/register.htm');
        cy.get('#rightPanel > p').should('have.text', 'Your account was created successfully. You are now logged in.')
        cy.title().should("eq", "ParaBank | Customer Created")
    })

    //TEST CASE 2

    it('Open_New_Account_Assertion-SecondTestCase', function () {

        //LOGIN of a new user 
        cy.get('.login:nth-child(2) > .input').type('test114');
        cy.xpath("//input[@name='password']").type('test');
        cy.get('input[value="Log In"]').click();

        // Assertions to verify successful Login of the new user
        //cy.get('.title').should('have.text','Accounts Overview');       

        // Click on Open New Account link
        cy.contains('Open New Account').click();
        //Select SAVINGS Account
        ////option[@value='1']
        //cy.get("select").select("1").invoke("val").should("eq", "SAVINGS");
        cy.get('select[id="type"]').select("1").should("have.value", "1");

        //Create Savings Account
        cy.xpath("//input[@value='Open New Account']").click();

        //After successful opening of New Savings Account - Verfiy assertions of Text
        cy.xpath("//div[@id='rightPanel']/div/div/h1").should('have.text', 'Account Opened!');
        cy.get('.ng-scope > p:nth-child(2)').invoke('text').should('include', 'Congratulations, your account');
        cy.title().should("eq", "ParaBank | Open Account")

    })
})


