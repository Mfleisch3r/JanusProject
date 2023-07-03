const { defineConfig } = require("cypress");

module.exports = defineConfig({
  env: {
    cart: '/cart',
    fullCart: '/gp/cart/view.html'
  },
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl: 'https://www.amazon.com'
  },
});
