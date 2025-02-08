describe('login', () => {
    it('success visit',() => {
        cy.visit('https://v2.jubelio.com')
        cy.contains('login')
    });
});