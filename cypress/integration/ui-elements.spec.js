context('UI Elements', () => {
  beforeEach(() => {
    cy.visit('/ui-elements');
    cy.get('.app-content').invoke('css', 'position', 'relative');
  });

  ////////
  // AVATAR
  ////////

  it('match default avatar', () => {
    cy.get('.avatar-default-test').scrollIntoView().matchImageSnapshot();
  });

  it('match letter avatar', () => {
    cy.get('.avatar-letter-test').scrollIntoView().matchImageSnapshot();
  });

  it('match image avatar', () => {
    cy.get('.avatar-image-test').scrollIntoView().matchImageSnapshot();
  });

  it('match list avatar', () => {
    cy.get('.avatar-list-test').scrollIntoView().matchImageSnapshot();
  });

  it('match list dense avatar', () => {
    cy.get('.avatar-list-dense-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // BADGES
  ////////

  it('match side badges', () => {
    cy.get('.badge-side-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // BUTTONS
  ////////

  it('match button default', () => {
    cy.get('.button-default-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button stroked', () => {
    cy.get('.button-stroked-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button flat', () => {
    cy.get('.button-flat-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button text with icon', () => {
    cy.get('.button-text-icon-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button density', () => {
    cy.get('.button-density-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button icon', () => {
    cy.get('.button-icon-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button icon dense', () => {
    cy.get('.button-icon-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button FAB', () => {
    cy.get('.button-fab-test').scrollIntoView().matchImageSnapshot();
  });

  it('match button FAB mini', () => {
    cy.get('.button-fab-mini-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // TOGGLE
  ////////

  it('match toggle filter', () => {
    cy.get('.toggle-filter-test').scrollIntoView().matchImageSnapshot();
  });

  it('match toggle dense', () => {
    cy.get('.toggle-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match toggle group', () => {
    cy.get('.toggle-group-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // CARDS
  ////////

  it('match card basic', () => {
    cy.get('.card-basic-test', { timeout: 5000 }).scrollIntoView().matchImageSnapshot();
  });

  it('match card workspace dense', () => {
    cy.get('.card-workspace-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match card product dense', () => {
    cy.get('.card-product-test').scrollIntoView().matchImageSnapshot();
  });

  it('match card solution dense', () => {
    cy.get('.card-solution-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // CHIPS
  ////////

  it('match chip states', () => {
    cy.get('.chip-states-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip densities', () => {
    cy.get('.chip-density-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip dense', () => {
    cy.get('.chip-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip icon', () => {
    cy.get('.chip-icon-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip icon dense', () => {
    cy.get('.chip-icon-dense-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip removable', () => {
    cy.get('.chip-removable-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip avatar', () => {
    cy.get('.chip-avatar-test').scrollIntoView().matchImageSnapshot();
  });

  it('match chip toggle', () => {
    cy.get('.chip-toggle-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // LINK
  ////////

  it('match link', () => {
    cy.get('.link-test').scrollIntoView().matchImageSnapshot();
  });

  ////////
  // SLIDE-TOGGLE
  ////////

  it('match slide-toggle states', () => {
    cy.get('.slide-toggle-states-test').scrollIntoView().matchImageSnapshot();
  });
});
