import 'cypress-xpath';
describe('Search Test', () => {
    beforeEach(() =>{
        cy.login('narithachyfix@gmail.com', 'Qwerty1!')
    });

    it('Search by No. Pesanan', () => {
        cy.visit('https://v2.jubelio.com/sales');
        
        // go to transaksi penjualan
        cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

        // Klik tombol penjualan
        cy.scrollTo(0,0);
        cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click(); //go to semua penjualan

        cy.wait(3000);
        // Get Data from Table
        cy.get('.MuiTableBody-root.css-1xnox0e').find('tr').then(($rows) => {
            if ($rows.length > 1){
                cy.log(`Number of rows: ${$rows.length}`);
                cy.get('.MuiTableBody-root.css-1xnox0e').find('tr').eq(0).find('td').eq(1).find('span.font-weight-lightbold')
                .should('exist') 
                .invoke('text').then((text) => {
                    // add search by no pesanan
                    cy.get('#mui-5').focus().type(text);
                });
            }
        });

        cy.get('.css-rfnosa > .MuiButton-root').click();
    });
    
    it('Search with filter lokasi', () => {
        cy.visit('https://v2.jubelio.com/sales');
        
        // go to transaksi penjualan
        cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

        // Klik tombol penjualan
        cy.scrollTo(0,0);
        cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click(); //go to semua penjualan

        cy.wait(3000);

        // Add filter lokasi
        cy.get(':nth-child(4) > .select-filter').click();
        cy.get('.mt-2 > :nth-child(1) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click();
        cy.get('.css-rfnosa > .MuiButton-root').click();
        
    });

    it('Search with status', () => {
        cy.visit('https://v2.jubelio.com/sales');
        
        // go to transaksi penjualan
        cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

        // Klik tombol penjualan
        cy.scrollTo(0,0);
        cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click(); //go to semua penjualan

        cy.wait(3000);

        // Add filter lokasi
        cy.get(':nth-child(5) > .select-filter').click();
        cy.get(':nth-child(2) > .MuiFormControlLabel-root > .MuiCheckbox-root > .PrivateSwitchBase-input').click();
        cy.get('.css-rfnosa > .MuiButton-root').click();
    });

    it('Search by date to today', () => {
        cy.visit('https://v2.jubelio.com/sales');
        
        // go to transaksi penjualan
        cy.get('.MuiGrid-container > [href="/sales/transactions"]').click();

        // Klik tombol penjualan
        cy.scrollTo(0,0);
        cy.get('[style="position: absolute; right: 35px; top: 60px; z-index: 99999; width: 400px; background: rgb(255, 255, 255); height: calc(100% - 130px);"] > .MuiButton-root').click();
        cy.get('.MuiTabs-flexContainer > :nth-child(1)').click(); //go to semua penjualan

        cy.wait(3000);
        
        // Add date filter
        //start date
        cy.get(':nth-child(2) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click();
        cy.get('.MuiDayPicker-monthContainer > :nth-child(2) > :nth-child(6)').click();
        
        //end date
        cy.get(':nth-child(4) > .MuiFormControl-root > .MuiInputBase-root > .MuiInputAdornment-root > .MuiButtonBase-root').click();
        cy.get('.Mui-focusVisible').click();
        cy.get('.css-rfnosa > .MuiButton-root').click();
    });
});