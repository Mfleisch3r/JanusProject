import homePage from "../../pages/home";
import productPage from "../../pages/product";

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
            // Go to product page
            cy.visit('/' + testData.BaseURL + product.ASIN);
            // Store title for later use
            productPage.elements.title().as('productTitle')
            // Store price for later use
            productPage.elements.price().as('productPrice')
        });
    })

})