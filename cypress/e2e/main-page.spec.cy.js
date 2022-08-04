describe('Home Page', () => {
  it('Should load', () => {
    cy.visit('http://localhost:3000/')
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', {fixture: "buttonData"})
  })

  it('Should have a title and subtitle', () => {
    cy.get('h1').should('contain.text', 'Rocky Mountain VibeCheck')
    cy.get('.subtitle').should('contain.text', 'What are you feeling today?')
  })

  it('Should contain buttons with different emotions', () => {
    cy.get('.feelingButton').should('contain.text', 'love')
    cy.get('.feelingButton').should('contain.text', 'joy')
    cy.get('.feelingButton').should('contain.text', 'surprise')
  })

  it('Should display an error message if the request fails.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Not Found)')
  })

  it('Should display an error message if there is a 500 error.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Internal Server Error)')
  })

  // it('Should contain buttons that are clickable.', () => {
  //   cy.get('.feelingButton').contains('love').click()
  // })
})