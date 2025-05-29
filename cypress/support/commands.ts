interface Chainable {
  getMockIngredients(): void;
}

Cypress.Commands.add('getMockIngredients', () => {
  cy.intercept('GET', 'api/ingredients', {
    statusCode: 200,
    fixture: 'ingredients.json'
  }).as('getIngredientsApi');
});

Cypress.Commands.add('mockUserLogin', () => {
  cy.intercept('POST', 'api/auth/login', {
    statusCode: 200,
    fixture: 'user.json'
  }).as('api/login');
});

Cypress.Commands.add('mockOrderData', () => {
  cy.intercept('POST', 'api/orders', {
    statusCode: 200,
    fixture: 'order.json'
  }).as('api/orders');
});