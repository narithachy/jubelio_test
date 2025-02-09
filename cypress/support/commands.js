Cypress.Commands.add('login', (username,password) => {
    cy.session([username,password], ()=>{
        cy.visit('https://v2.jubelio.com/auth/login')
            cy.get('#textfield-email').type(username)
            cy.get('#textfield-password').type(password)
            cy.xpath("//button[@type='submit']").click();
            cy.wait(5000);
    }),
    {
        cacheAcrossSpecs:true
    }
})