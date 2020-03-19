

context('Foundations', () => {
  beforeEach(() => {
    cy.visit('http://localhost:4200')
    cy.contains('menu').click()
    cy.contains('Foundations').click()
  })

  it('match icons colors', () => {
    cy.get('.icon-colors-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .toMatchImageSnapshot()
  })
  
  it('match icons sizes', () => {
    cy.get('.icon-sizes-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .toMatchImageSnapshot()
  })

  it('match icon types', () => {
    cy.get('.icon-types-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .toMatchImageSnapshot()
  })

  it('match logo nomal', () => {
    cy.get('.logo-normal-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .should('be.visible',{timeout:10000})
      .toMatchImageSnapshot()
  })

  it('match logo dense', () => {
    cy.get('.logo-dense-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .should('be.visible',{timeout:10000})
      .toMatchImageSnapshot()
  })

  it('match logo link', () => {
    cy.get('.logo-link-test')
      .scrollIntoView({offset: {top: "-50px"}})
      .should('be.visible',{timeout:10000})
      .toMatchImageSnapshot()
  })

})