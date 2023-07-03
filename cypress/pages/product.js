// Product page

class productPage{

    elements ={
       // Product info
       title: () =>  cy.get('#title > #productTitle'),
       price: () => cy.get('#corePrice_feature_div').find('span.a-offscreen')
    }

}

module.exports = new productPage();