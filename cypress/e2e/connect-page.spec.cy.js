describe('Home Page', () => {
  beforeEach(() => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', { fixture: "buttonData" })
    cy.visit('http://localhost:3000/connect')
  })

  it('Should have a title and subtitle', () => {
    cy.get('h1').should('contain.text', 'What are you feeling today?')
    cy.get('.header').should('contain.text', 'Rocky Mountain Vibes')
  })

  it('Should contain buttons with different emotions', () => {
    cy.get('.feelingButton').should('contain.text', 'love')
    cy.get('.feelingButton').should('contain.text', 'joy')
    cy.get('.feelingButton').should('contain.text', 'surprise')
  })

  it('Should contain buttons that are clickable.', () => {
    cy.get('.feelingButton').contains('love').click()
    cy.url().should('eq', 'http://localhost:3000/feeling/love')
  })

  it('Should display an error message if the request fails.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/connect')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Not Found)')
  })

  it('Should display an error message if there is a 500 error.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/connect')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Internal Server Error)')
  })
})