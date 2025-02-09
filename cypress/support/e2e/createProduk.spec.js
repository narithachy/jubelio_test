import 'cypress-xpath';

describe('Create Produk', () => {
  beforeEach(() => {
    cy.session('login', () => {
      // Kunjungi halaman login dan lakukan login
      cy.visit('https://v2.jubelio.com/auth/login');

      // Isi field email dan password
      cy.get('#textfield-email').type('narithachyfix@gmail.com');
      cy.get('#textfield-password').type('Qwerty1!');

      // Klik tombol login
      cy.xpath("//button[@type='submit']").click();

      // Pastikan login berhasil
    //   cy.url().should('not.include', '/auth/login');
    });
  });

  it('success create produk', () => {
    // Pastikan berada di halaman katalog setelah login
    cy.visit('https://v2.jubelio.com/catalog');

    // Klik menu Katalog
    // cy.xpath('//*[@id="shell"]/div/div/div/div[1]/div[1]/div[2]/ul/li[2]/a').should('be.visible').click();
    cy.get('.MuiList-root > [href="/catalog"]').click();
    cy.contains('Katalog')

    // Klik tombol tambah produk
    cy.get("#content > div > div > div > div > div > a:nth-child(2)").click();
  });
});
