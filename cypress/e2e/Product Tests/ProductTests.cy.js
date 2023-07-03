import homePage from "../../pages/home";
import productPage from "../../pages/product";
import smartCartPage from "../../pages/smartCart";

describe('Amazon Product Tests', () => {
    let testData;
    // Grab testdata
    before('Read JSON data', () => {
        cy.fixture('/Product Tests/testData').then( data => {
            testData = data;
        })
    })


    it('Add products to cart', () => {
        // Add each product from array to cart
        testData.Products.forEach( product => {
            let productUrl = Cypress.config('baseUrl') + testData.BaseURL + product.ASIN;
            // Go to product page
            cy.visit(productUrl);

            // Add to cart
            productPage.elements.addToCart().click();
            // Verify product was added
            cy.url().then( url => {
                // If url has changed, expect to be in cart
                if (url !== productUrl){
                    expect(url).include(Cypress.env('cart'));
                    // Look for added to cart text
                    smartCartPage.elements.addMessage().should('include.text', testData.ExpectAdd);
                
                    // Else verify through slide cart
                }else{
                    productPage.elements.addMessage().should('include.text', testData.ExpectAdd);
                }
            })
        });
    })

    

})