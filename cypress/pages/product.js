// Product page

class productPage{

    elements ={ 
       // Product info
       title: () => cy.get('#title > #productTitle'),
       price: () => cy.get('#corePrice_feature_div').find('span.a-offscreen'),
       // Cart buttons
       addToCart: () => cy.get('#add-to-cart-button'),
       buyNow: () => cy.get('#buy-now-button'),
       // Slide cart
       addMessage: () => cy.get('#attachDisplayAddBaseAlert > .a-box-inner > .a-alert-heading', { timeout: 10000 }),
    }

}

module.exports = new productPage();