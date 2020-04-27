context('Foundations', () => {
  beforeEach(() => {
    cy.visit('/foundations');
    cy.get('.app-content').invoke('css', 'position', 'relative');
  });

  ////////
  // ICONS
  ////////

  it('match icons colors', () => {
    cy.get('.icon-colors-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match icons sizes', () => {
    cy.get('.icon-sizes-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match icon types', () => {
    cy.get('.icon-types-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  ////////
  // LOGO
  ////////

  it('match logo nomal', () => {
    cy.get('.logo-normal-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match logo dense', () => {
    cy.get('.logo-dense-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match logo link', () => {
    cy.get('.logo-link-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  ////////
  // TYPO
  ////////

  it('match display scale', () => {
    cy.get('.typo-display-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match headline scale', () => {
    cy.get('.typo-headline-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match subtitle scale', () => {
    cy.get('.typo-subtitle-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match body scale', () => {
    cy.get('.typo-body-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });

  it('match small scale', () => {
    cy.get('.typo-small-test')
      .scrollIntoView()
      .toMatchImageSnapshot();
  });
});
