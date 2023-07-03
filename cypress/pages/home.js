// Home page

class homePage{

    elements ={
       // Search area
       searchField: () =>  cy.get('#twotabsearchtextbox'),
       searchButton: () => cy.get('#nav-search-submit-button') 
    }

}

module.exports = new homePage();