//<reference types = "cypress" />
//above reference is the intellisense and it shows suggestions
import Registration from "../pomObjects/Registration";
import Login from "../pomObjects/Login";
import Transferfunds from "../pomObjects/Transferfunds";
import Updateprofile from "../pomObjects/Updateprofile";
import Openaccount from "../pomObjects/Openaccount";
const rg = new Registration()

const userName = 'anu755'
const password = 'Test@123'


const  si = new Openaccount()
describe('Test suite contain 4 Test cases', function () {
    //Different Hooks
    before('Visit URL', function () {
        // baseURL DEFINE IN CYPRESS.JSON FILE 
        cy.visit("/");
    });
 
    // //TEST CASE 1
    it('New Registration and Login with Assertions', function () {

        rg.register_link()
        rg.fnamedata('Test')
        rg.lnamedata('User')
        rg.addressdata('810 Boul Henri-Bourassa Est')
        rg.citydata('Montreal')
        rg.addressdata1('Test 123 User')
        rg.zipcodedata('H2C1R4')
        rg.ssndata1('9897345384')
        rg.phoneNumberdata('+1438-456-9090')
        rg.usernamedata(userName)
        rg.passworddata(password)
        rg.confirmpassworddata(password)
        rg.register();

        // Verify through DIFFERENT ASSERTIONS to check the successful account creation

        rg.confirmationregistermessage().invoke('text').should('include', 'Welcome ');
        rg.confirmationregistermessage1().should('have.text', 'Your account was created successfully. You are now logged in.');
        cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/register.htm');
        cy.title().should("eq", "ParaBank | Customer Created")
        cy.contains("Log Out").should('be.visible').click({ force: true })

    })

    it('Sign In_Open new Account with Assertions', function () {

        si.usernamedata(userName)
        si.passwordata(password)
        si.login();
        si.opennewaccount_link();
        si.selectaccounttype();
        cy.wait(1000);
        si.createsavingsacc();
        // Verify through DIFFERENT ASSERTIONS to check the successful opening of new savings account
        si.success_savings_acc_message().should('have.text', 'Account Opened!');
        si.success_savings_acc_message1().invoke('text').should('include', 'Congratulations, your account');
        cy.title().should("eq", "ParaBank | Open Account")
        cy.contains("Log Out").should('be.visible').click({ force: true })
    })

    it('Transferfunds', function () {


        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
        const tf = new Transferfunds()
        tf.setUserName(userName)
        tf.setPassword(password)
        tf.clicklogin()
        tf.verifylogin()

        cy.wait(500);

        tf.clickTransferFunds()
        tf.setAmount('20')
        tf.clickTransfer()
        tf.verifyUrl()
        tf.verifyTitle()
        
        tf.verifyFundsTransfer()

        cy.wait(1000);

       cy.contains("Log Out").should('be.visible').click({ force: true })
    })


    it('UpdateProfile', function () {
        cy.visit('https://parabank.parasoft.com/parabank/index.htm')
    
        const pu = new Updateprofile()
        pu.setUserName(userName)
        pu.setPassword(password)
        pu.clicklogin()
        pu.verifylogin()

        cy.wait(500);

        pu.clickUpdateProfile()
        pu.updatePhone('+1438-456-9090')
        pu.clickUpdate()
        
        cy.url().should('be.equal', 'https://parabank.parasoft.com/parabank/updateprofile.htm')
        cy.title().should("eq", "ParaBank | Update Profile")
        cy.get('[class="title"]').should("have.text", "Profile Updated")
        cy.visit('https://parabank.parasoft.com/parabank/updateprofile.htm')
        cy.get('[id="customer.phoneNumber"]').should("have.value", "+1438-456-9090")

    })

})