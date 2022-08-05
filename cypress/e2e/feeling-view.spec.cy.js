describe('Home Page', () => {
  it('Should load', () => {
    cy.visit('http://localhost:3000/love')
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals', {fixture: "globalTotal"})
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=love', {fixture: "localTotals"})
  })

  it('Should have a title', () => {
    cy.get('h1').should('contain.text', 'Rocky Mountain VibeCheck')
  })

  it('Should contain a different subtitle', () => {
    cy.get('.small-header').should('contain.text', 'If you feel love today...You\'re not alone. There are:')
  })

  it('Should contain a number and text stating the totals in the MST.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=love', {fixture: "localTotals"})
      cy.get('.totals').should('contain.text', '604 others in your region.2,033,264 in the world.')
  })

  it('Should contain a back button to return home.', () => {
    cy.get('.home-button').should('contain.text', 'Back').click()
    cy.url().should('eq', 'http://localhost:3000/')
  })

  it('Should display an error message if the global total API request fails.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/love')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Not Found)')
  })

  it('Should display an error message if there is a 500 error for the global totals request.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/emotions/primary/totals', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/love')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Internal Server Error)')
  })

  it('Should display an error message if the local total API request fails.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=love', {
      statusCode: 404
    })
    cy.visit('http://localhost:3000/love')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Not Found)')
  })

  it('Should display an error message if there is a 500 error for the local totals request.', () => {
    cy.intercept('GET', 'https://arcane-hollows-12884.herokuapp.com/https://wefeel.csiro.au/main/api/zones/continents/northAmerica/timezones/timepoints?primaryEmotion=love', {
      statusCode: 500
    })
    cy.visit('http://localhost:3000/love')
    cy.get('.error-text').should('contain.text', 'Looks like we\'re having trouble loading this. (Error: Internal Server Error)')
  })

})