class Transferfunds
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


    clickTransferFunds()
{
    cy.get('[href="/parabank/transfer.htm"]').click()
}



setAmount(amount)
{
    cy.get('[id="amount"]').type(amount)
}

clickTransfer()
{
    cy.get('[type="submit"]').click()
}

verifyUrl()
{
    cy.url().should('be.equal','https://parabank.parasoft.com/parabank/transfer.htm')
}

verifyTitle()
{
    cy.title().should("eq","ParaBank | Transfer Funds")
}

verifyFundsTransfer()
{
    cy.get('[class="title"]').should("have.text","Transfer Complete!")
}

}
export default  Transferfunds
