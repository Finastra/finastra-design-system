context('Foundations', () => {
  beforeEach(() => {
    cy.visit('/foundations');
    cy.get('.app-content').invoke('css', 'position', 'relative');
  });

  ////////
  // ICONS
  ////////

  it('match icons colors', () => {
    cy.get('.icon-colors-test').scrollIntoView().matchImageSnapshot();
  });

  it('match icons sizes', () => {
    cy.get('.icon-sizes-test').scrollIntoView().matchImageSnapshot();
  });

  it('match icon types', () => {
    cy.get('.icon-types-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // LOGO
  ////////

  it('match logo nomal', () => {
    cy.get('.logo-normal-test').scrollIntoView().matchImageSnapshot();
  });

  it('match logo dense', () => {
    cy.get('.logo-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match logo link', () => {
    cy.get('.logo-link-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // TYPO
  ////////

  it('match display scale', () => {
    cy.get('.typo-display-test').scrollIntoView().matchImageSnapshot();
  });

  it('match headline scale', () => {
    cy.get('.typo-headline-test').scrollIntoView().matchImageSnapshot();
  });

  it('match subtitle scale', () => {
    cy.get('.typo-subtitle-test').scrollIntoView().matchImageSnapshot();
  });

  it('match body scale', () => {
    cy.get('.typo-body-test').scrollIntoView().matchImageSnapshot();
  });

  it('match small scale', () => {
    cy.get('.typo-small-test').scrollIntoView().matchImageSnapshot();
  });
});
