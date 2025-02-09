import 'cypress-xpath';
describe('login', () => {
    it('success visit',() => {
        cy.session('login', () => {
            cy.visit('https://v2.jubelio.com/auth/login')

            // Isi field email dan password
            cy.get('#textfield-email').type('narithachyfix@gmail.com')
            cy.get('#textfield-password').type('Qwerty1!')

            // klik button login
            cy.xpath("//button[@type='submit']").click();

            // cy.url('https://v2.jubelio.com/shared/questionaire').should('include', '/questionare')

        })
    });
});