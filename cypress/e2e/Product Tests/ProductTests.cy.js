import homePage from "../../pages/home"

describe('Amazon Product Tests', () => {
    let testData;
    // Grab testdata
    before('Read JSON data', () => {
        cy.fixture('/Product Tests/testData').then( data => {
            testData = data;
        })
    })


    it('', () => {
    })

})