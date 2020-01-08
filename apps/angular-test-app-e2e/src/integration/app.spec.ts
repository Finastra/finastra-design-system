describe('Application', () => {
  beforeEach(() => cy.visit('/'));
  it('should display welcome message', () => {
    console.log(cy.get('mat-toolbar mat-icon:first'));
    cy.get('mat-toolbar mat-icon:first').contains('menu');
  });
});
