describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/diary')
  })

  it('Should have a title with images.', () => {
    cy.get('.subtitle').should('contain.text', 'Capture an Emotion')
    cy.get('img').should('have.length', 4)
  })

  it('Should have an input form with a text box, dropdown menu, and submit button.', () => {
    cy.get('form').should('exist')
    cy.get('input[type="submit"]').should('exist')
    cy.get('textarea').should('exist')
    cy.get('.dropdown').should('exist')
  })

  it('Should be able to submit a new feeling, and remove it.', () => {
    cy.get('.dropdown').select('love')
    cy.get('textarea').type('in my bones')
    cy.get('input[type="submit"]').click()
    
    cy.get('.diary-cards').should('contain.text', 'love').should('contain.text', 'in my bones')
    cy.get('.time').should('be.visible')
    cy.get('.delete').click()
  })

  it('Should display a message when there are no cards.', () => {
    cy.get('.empty-display').should('be.visible')
  })
})