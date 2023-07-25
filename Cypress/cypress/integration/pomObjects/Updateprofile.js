class Updateprofile
{
    setUserName(username)
    {
        cy.get('.login:nth-child(2) > .input').type(username);
    }
        
    setPassword(password)
    {
        cy.xpath("//input[@name='password']").type(password);
    }
    
    clicklogin()
    {
        cy.get('input[value="Log In"]').click();
    }
    
    verifylogin()
    {
        cy.get('[class="title"]').should('have.text','Accounts Overview')
    }

    clickUpdateProfile()
    {
    cy.get('[href="/parabank/updateprofile.htm"]').click()
    }

    updatePhone(phoneNumber)
    {
        cy.get('[id="customer.phoneNumber"]').clear().type(phoneNumber)
    }

    clickUpdate()
    {
        cy.get('[value="Update Profile"]').click()
    }


   
}

export default Updateprofile;
