// Smart Cart page

class smartCartPage{

    elements ={ 
       addMessage: () => cy.get('#NATC_SMART_WAGON_CONF_MSG_SUCCESS > span.sw-atc-text'),
    }

}

module.exports = new smartCartPage();