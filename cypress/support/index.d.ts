declare namespace Cypress {
  interface Chainable {
    getMockIngredients(): void;
    mockUserLogin(): void;
    mockOrderData(): void;
  }
}