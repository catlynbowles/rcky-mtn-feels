describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/')
  })

  it('Should have a title and two subtitles', () => {
    cy.get('h1').should('contain.text', 'About Rocky Mountain Vibes')
    cy.get('h3').should('contain.text', 'The Mission')
    cy.get('h3').should('contain.text', 'Features')
  })

  it('Should have text explaining mission statement and feature', () => {
    cy.get('.about-description').should('contain.text', 'The purpose of this project is to create a tool that helps us')
    cy.get('.about-description').should('contain.text', 'The app includes several features.')
  })

  it('Should contain images, including those in the header', () => {
    cy.get('.catlyn').should('be.visible')
    cy.get('.header').should('be.visible')
    cy.get('img').should('have.length', 5)
  })
})