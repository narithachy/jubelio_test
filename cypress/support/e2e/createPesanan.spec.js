import 'cypress-xpath';

describe('Create Pesanan', () => {
    beforeEach(() => {
      cy.login('narithachyfix@gmail.com', 'Qwerty1!')
    });
  
    it('success create pesanan', () => {
        cy.visit('https://v2.jubelio.com/sales');
        cy.contains('Transaksi Penjualan')
        
        // Klik tombol penjualan
        cy.get("#content > div > div > div > div > div > a:nth-child(2) > div > div").click();
        cy.contains('Penjualan')
        cy.scrollTo(0,0);
        
        cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
        
        // Klik tombol tambah baru
        cy.scrollTo(0,0);
        cy.get('.MuiButton-root > .d-flex').click();
        
        // Input Pelanggan
        cy.wait(2000)
        cy.xpath('//input[@placeholder="Pilih pelanggan"]').focus().type("tokopedia");
        cy.get('.MuiOutlinedInput-input').eq(1).should('be.visible').click();
        cy.get('li.MuiAutocomplete-option').contains('TOKOPEDIA').click();

        // Input No ref
        cy.xpath('//input[@placeholder="No. ref"]').focus().type("123456789");
        
        // Input Lokasi
        cy.xpath('//input[@placeholder="Pilih lokasi"]').focus().type("pusat");
        cy.get('.MuiOutlinedInput-input').eq(7).should('be.visible').click();
        cy.get('li.MuiAutocomplete-option').contains('Pusat').click();

        // Input Keterangan
        cy.get('.MuiOutlinedInput-input').eq(8).type("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s.");
        
        // Sudah Lunas
        cy.get(':nth-child(25) > .MuiFormControlLabel-root > .MuiSwitch-root > .MuiSwitch-switchBase > .MuiSwitch-input').click();

        // Tambah Produk
        cy.get('.css-1o9xw9j > .MuiButton-root').click();
        cy.get('[data-index="0"] > [style="height: 74px;"] > .css-1rjpksd > .flex-row').should('be.visible').first().click();

        // Alamat
        cy.get('.MuiGrid-container > :nth-child(4) > .text-primary').click();
        cy.wait(500);
        // isi negara
        cy.get('.MuiOutlinedInput-input').eq(23).focus().type("Indonesia");
        //Isi alamat dan cek opsi autocomplete
        cy.get('.MuiOutlinedInput-input').eq(24).focus().type("cempaka putih").then(($input) => {
          cy.get('.MuiAutocomplete-popper').then(($popup) => {
            if ($popup.is(':visible')) {
              cy.wrap($popup).find('.MuiAutocomplete-option').first().click();
            } else {
              cy.log('Tidak ada opsi autocomplete yang muncul.');
            }
          });
        });

        cy.wait(500)
        cy.get('.d-flex > .MuiButton-root').click();

        // Tambah No telp penerima
        cy.xpath('//input[@placeholder="Masukkan no telepon"]').focus().type('082222222222');
      
        // Tambah No Resi
        cy.xpath('//input[@placeholder="Masukkan no. resi"]').focus().type('12345678999');
        
        // Input Kurir
        cy.xpath('//input[@placeholder="Pilih kurir"]').focus().type("jnt");
        cy.get('.MuiOutlinedInput-input').eq(15).should('be.visible').click();
        cy.get('li.MuiAutocomplete-option').contains('JNT').click();

        //Submit
        cy.get('.d-flex > div > .MuiButton-root').click();
    });
    
  });
  