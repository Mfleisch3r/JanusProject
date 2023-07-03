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
                if (!url.includes(productUrl)){
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

    it('Search by product name', () => {
        // Search each product
        testData.Products.forEach( product => {
            cy.visit('/')
            homePage.elements.searchField().clear().type(product.Name)
            homePage.elements.searchButton().click()
            // Dynamically get element by asin
            cy.get('a[href*="'+ product.ASIN +'"] > span.a-text-normal').then( (element) => {
                //Check link for ASIN
                cy.wrap(element).parent().invoke('attr', 'href').should('include', product.ASIN)
                // Compare result text to expected text
                expect(element.text()).include(product.Name)
            })
        })
    })

    it('Search by product id(ASIN)', () => {
        // Search each product
        testData.Products.forEach( product => {
            cy.visit('/')
            homePage.elements.searchField().clear().type(product.ASIN)
            homePage.elements.searchButton().click()
            // Dynamically get element by asin
            cy.get('a[href*="'+ product.ASIN +'"] > span.a-text-normal').then( (element) => {
                //Check link for ASIN
                cy.wrap(element).parent().invoke('attr', 'href').should('include', product.ASIN)
                // Compare result text to expected text
                expect(element.text()).include(product.Name)
            })
        })
    })

})