describe('Demo QA', () => {
  it('Banner', () => {
    cy.visit('https://demoqa.com')
    cy.get('.banner-image').should('be.visible')
  })
  it('Menu list', () => {
    cy.visit('https://demoqa.com')
    cy.get('.category-cards > :nth-child(1)').click()
    cy.get('.main-header').should('have.text', "Elements")
  })
  it('Text box', () => {
    cy.visit('https://demoqa.com')
    cy.get(':nth-child(1) > .element-list > .menu-list > #item-0 > .text').click()
  })
})