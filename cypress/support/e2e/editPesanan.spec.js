import'cypress-xpath';

describe('Edit Pesanan', () => {
    beforeEach(() => {
      cy.login('narithachyfix@gmail.com', 'Qwerty1!')
    });

    it('success edit pesanan', () => {
      cy.visit('https://v2.jubelio.com/sales');
      cy.contains('Transaksi Penjualan')
      
      // Klik tombol penjualan
      cy.get("#content > div > div > div > div > div > a:nth-child(2) > div > div").click();
      cy.contains('Penjualan')
      
      cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
      
      // Klik No.Pesanan
      cy.get('.MuiTypography-inherit').eq(0).should('be.visible').click();

      // Klik button edit
      cy.get('.d-flex > div > .MuiButton-root').click();

      cy.wait(1000);

      // Edit No.ref
      cy.xpath('//input[@placeholder="No. ref"]').focus().type("123456789001");

      // Tambah Produk
      cy.get('.css-1o9xw9j > .MuiButton-root').click();
      cy.get('[data-index="0"] > [style="height: 74px;"] > .css-1rjpksd > .flex-row').should('be.visible').first().click();

      // Tambah No telp penerima
      cy.xpath('//input[@placeholder="Masukkan no telepon"]').focus().type('082222222222');
      
      // Tambah No Resi
      cy.xpath('//input[@placeholder="Masukkan no. resi"]').focus().type('12345678999');

      //Submit
      cy.get('.d-flex > div > .MuiButton-root').click();
    });
});